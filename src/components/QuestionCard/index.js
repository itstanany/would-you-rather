import { Link } from "react-router-dom";
import { Button, Item } from "semantic-ui-react"

const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ')

const QuestionCard = ({ question, user }) => {
  return (
    <Item>
      <Item.Image size='small' src={user.avatarURL} />

      <Item.Content>
        <Item.Header as='a'>
          {
            user.name
          }, asks Would You Rather &#63;
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
    </Item>);
}

export default QuestionCard;
export {
  QuestionCard,
}