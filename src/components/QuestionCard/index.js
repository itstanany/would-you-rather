/**
 * Card to present a question
 * props:
 *  question: question object in the form of object returned from API
 *  user: user object
 */

import { Link } from 'react-router-dom';
import { Button, Item } from 'semantic-ui-react';

const QuestionCard = ({ question, user }) => (
  <Item>
    <Item.Image size="small" src={user.avatarURL} />

    <Item.Content>
      <Item.Header as="a">
        {
          user.name
        }
        , asks Would You Rather &#63;
      </Item.Header>
      <Item.Description>
        <ul>
          <li>
            {question.optionOne.text}
          </li>
          Or
          <li>
            {question.optionTwo.text}

          </li>
        </ul>
      </Item.Description>
      <Link to={`questions/${question.id}`}>
        <Button>
          View Details
        </Button>
      </Link>
    </Item.Content>
  </Item>
);

export default QuestionCard;
export {
  QuestionCard,
};
