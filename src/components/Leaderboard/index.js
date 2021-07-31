import { useSelector } from 'react-redux';
import { usersSelector } from '../../utils';
import { LeaderCard } from './LeaderCard';
import { getSortedUsers } from './utils';

const Leaderboard = () => {
  const { users } = useSelector(usersSelector);
  const sortedUser = getSortedUsers(users);
  return (
    <div style={{ display: 'flex' }}>
      {
        sortedUser.map((user, index) => (
          <LeaderCard
            user={user}
            index={index}
            key={user.id}
          />
        ))
      }
    </div>
  );
};

export default Leaderboard;
export {
  Leaderboard,
};
