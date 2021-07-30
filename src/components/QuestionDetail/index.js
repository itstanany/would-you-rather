import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Item } from "semantic-ui-react";
import { saveAnswer } from "../../store";
import { questionsSelector, usersSelector } from '../../utils'

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { questions } = useSelector(questionsSelector);
  const { users } = useSelector(usersSelector);
  const [checkedItem, setCheckedItem] = useState('');
  const question = questions[id];
  const user = users[question?.author || {}];

  const handleChangeCheck = useCallback((e, { value }) => {
    setCheckedItem(value);
  }, [setCheckedItem]);

  const submitAnswer = useCallback((e) => {
    e.preventDefault();
    dispatch(saveAnswer({ answer: checkedItem, qId: id }))
  }, [checkedItem, id, dispatch]);

  return (
    <Item>
      <Item.Image size='small' src={user?.avatarUrl} />

      <Item.Content>
        <Item.Header as='a'>
          {
            user.name
          }, asks Would You Rather &#63;
        </Item.Header>
        <Item.Description>
          <Form>
            <Form.Field>
              Selected value:
              {' '}
              <b>
                {
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
                name='checkboxRadioGroup'
                value='optionOne'
                checked={checkedItem === 'optionOne'}
                onChange={handleChangeCheck}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label={question.optionTwo.text}
                name='checkboxRadioGroup'
                value='optionTwo'
                checked={checkedItem === 'optionTwo'}
                onChange={handleChangeCheck}
              />
            </Form.Field>
          </Form>
        </Item.Description>
        <Button onClick={submitAnswer}>
          Answer
        </Button>
      </Item.Content>
    </Item>);
}

export default QuestionDetail;

export {
  QuestionDetail,
}