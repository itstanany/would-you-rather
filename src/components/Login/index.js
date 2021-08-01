import {
  useCallback, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dropdown, Image, Segment } from 'semantic-ui-react';
import { useQuery } from '../../customHooks';
import { getUsers } from '../../store';
import { login } from '../../store/user';

const buildUserOptions = ({ users }) => (Object.values(users).map((user) => (
  {
    key: user.id,
    value: user.id,
    text: user.name,
    image: { avatar: true, src: user.avatarURL },
  }
)));

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedUser, setSelectedUser] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [usersOptions, setUsersOptions] = useState(buildUserOptions({ users }));
  const query = useQuery();
  const fromPathName = query.get('from');

  useEffect(() => {
    if (user.state === 'authenticated') {
      history.push({ pathname: (fromPathName || '/dashboard') });
    }
  }, [user.state, history, fromPathName]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
    setUsersOptions(buildUserOptions({ users }));
  }, [users]);

  const handleUserSelect = useCallback((_, data) => {
    setSelectedUser(data.value);
    dispatch(login({ users, userId: data.value }));
  }, [users, dispatch]);

  return (
    <Segment>
      <h1>
        Welcome - Would You Rather?
      </h1>
      <Image
        src="https://static.parade.com/wp-content/uploads/2019/12/Would-You-Rather_Questions.jpg"
        size="medium"
        centered
        style={{ marginBottom: '15px' }}
      />

      <Dropdown
        placeholder="Select User"
        fluid
        selection
        options={usersOptions}
        onChange={handleUserSelect}
      />
    </Segment>
  );
};

export default Login;
export {
  Login,
};
