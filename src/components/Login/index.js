import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../customHooks';
import { getUsers } from '../../store';
import { login } from '../../store/user';

const Login = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const query = useQuery();
  const fromPathName = query.get('from');

  const handleSelectChange = useCallback((e) => {
    setSelectedUser(e.target.value);
    dispatch(login({ users, userId: e.target.value }));
  }, [setSelectedUser, users, dispatch]);

  useEffect(() => {
    if (user.state === 'authenticated') {
      history.push({ pathname: (fromPathName || '/dashboard') });
    }
  }, [user.state, history, fromPathName]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>
        Welcome - Would You Rather?
      </h1>
      <select
        value={selectedUser}
        onChange={handleSelectChange}
        className="ui fluid search selection dropdown"
      >
        <option disabled value="">Select a User</option>
        {
          Object.keys(users).map((usId) => (
            <option
              key={usId}
              value={users[usId]?.id}
            >
              {users[usId]?.name}
            </option>
          ))
        }
      </select>
    </>
  );
};

export default Login;
export {
  Login,
};
