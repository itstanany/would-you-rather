/**
 * Leaderboard page
 * It represents the users scores in an descending order
 */

import { useSelector } from 'react-redux';
import {
  Card,
} from 'semantic-ui-react';
import { usersSelector } from '../../utils';
import { LeaderCard } from './LeaderCard';
import { getSortedUsers } from './utils';

const Leaderboard = () => {
  const { users } = useSelector(usersSelector);
  const sortedUser = getSortedUsers(users);
  return (
    <Card.Group centered>
      {
        sortedUser.map((user, index) => (
          <LeaderCard
            user={user}
            index={index}
            key={user.id}
          />
        ))
      }
    </Card.Group>
  );
};

export default Leaderboard;
export {
  Leaderboard,
};
