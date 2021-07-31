import { Link } from 'react-router-dom';
import {
  Button, Checkbox, Form, Item, Progress,
} from 'semantic-ui-react';

const QuestionDetailComponent = ({
  id, currentUser, checkedItem, question, user, totalVotes,
  handleChangeCheck, submitAnswer,
}) => (
  <Item>
    <Item.Image size="small" src={user?.avatarUrl} />
    <Item.Content>
      {
        currentUser?.answers?.[id]
          ? (
            <>
              <Item.Header as="a">
                {
                  user.name
                }
                , asks Would You Rather &#63;
              </Item.Header>
              <Item.Description>
                <Progress
                  percent={Math.round((question.optionOne.votes.length / totalVotes) * 100)}
                  progress
                >
                  {
                    currentUser?.answers?.[id] === 'optionOne'
                      ? ` ${question?.optionOne?.text} ^*^ #${question?.optionOne?.votes?.length} votes ^|*|^  You Answer!`
                      : ` ${question?.optionOne?.text} ^*^ #${question?.optionOne?.votes?.length} votes.`
                  }
                </Progress>
                <hr />
                <Progress
                  percent={Math.round((question?.optionTwo?.votes.length / totalVotes) * 100)}
                  progress
                >
                  {
                    currentUser?.answers?.[id] === 'optionTwo'
                      ? `${question?.optionTwo?.text} ^*^ #${question?.optionTwo?.votes?.length} votes ^|*|^  You Answer!`
                      : `${question?.optionTwo?.text} ^*^ #${question?.optionTwo?.votes?.length} votes.`
                  }
                </Progress>
              </Item.Description>
              <Link to="/dashboard">
                <Button>
                  Back to Dashboard
                </Button>
              </Link>
            </>
          )
          : (
            <>
              <Item.Header as="a">
                {
                  user.name
                }
                , asks Would You Rather &#63;
              </Item.Header>
              <Item.Description>
                <Form>
                  <Form.Field>
                    Selected value:
                    {' '}
                    <b>
                      {
                        // eslint-disable-next-line no-nested-ternary
                        checkedItem === 'optionOne'
                          ? question.optionOne.text
                          : checkedItem === 'optionTwo'
                            ? question.optionTwo.text
                            : ''
                      }
                    </b>
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label={question.optionOne.text}
                      name="checkboxRadioGroup"
                      value="optionOne"
                      checked={checkedItem === 'optionOne'}
                      onChange={handleChangeCheck}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label={question.optionTwo.text}
                      name="checkboxRadioGroup"
                      value="optionTwo"
                      checked={checkedItem === 'optionTwo'}
                      onChange={handleChangeCheck}
                    />
                  </Form.Field>
                </Form>
              </Item.Description>
              <Button onClick={submitAnswer}>
                Answer
              </Button>
            </>
          )
      }
    </Item.Content>
  </Item>
);

export default QuestionDetailComponent;

export {
  QuestionDetailComponent,
};
