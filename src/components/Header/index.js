import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { logOut, states as userStates } from '../../store/user';
import { store } from '../../store';
import { userSelector } from '../../utils';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector(userSelector);
  const user = useRef(userState?.user);

  const logoutHandler = useCallback(() => {
    dispatch(logOut()).then(() => {
      if (store?.getState?.()?.user?.state === userStates.unauthenticated) {
        history.push({ pathname: '/login' });
      }
    });
  }, [dispatch, history]);

  useEffect(() => {
    user.current = userState.user;
  }, [userState]);

  return (
    <div className="ui inverted menu">
      <div className="ui container">
        <div className="item" />
        <NavLink
          to="/"
          exact
          className="header item"
          activeClassName="active"
        >
          <Icon name="home" size="small" />
          Home
        </NavLink>
        <NavLink to="/add" exact className="item" activeClassName="active">
          <Icon name="question circle outline" size="small" />
          New Question
        </NavLink>
        <NavLink
          to="/leaderboard"
          exact
          className="item"
          activeClassName="active"
        >
          <Icon name="chart line" size="small" />
          Leader Board
        </NavLink>
        <div className="ui right floated item">
          <span style={{ marginRight: '10px' }}>
            Hello,
            {user.current?.name}
          </span>
          <img className="ui avatar image" src={user.current?.avatarURL} alt="" />
        </div>
        {/* <NavLink to="/logout" exact className="item" activeClassName="active">
          Logout
        </NavLink> */}

        <Button onClick={logoutHandler} className="item" activeClassName="active">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
export { Header };
