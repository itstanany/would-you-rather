import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveNewQ } from "../../store";
import { userSelector } from '../../utils';
import NewQuestionComponent from "./NewQuestion.component";


const NewQuestion = () => {
  const { user } = useSelector(userSelector);
  const userQ = useRef(user?.questions);
  const history = useHistory();
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleInputChange = useCallback((e) => {
    switch (e.target.name) {
      case 'optionOne':
        setOptionOne(e.target.value);
        break;
      case 'optionTwo':
        setOptionTwo(e.target.value);
        break;
      default:
        return;
    }
    return
  }, []);

  const submitNewQ = useCallback((e) => {
    if (!(optionOne && optionTwo)) {
      alert('Option One & Two are required!');
      return;
    }
    dispatch(saveNewQ({ optionOneText: optionOne, optionTwoText: optionTwo, user })).then(() => {

    })
  }, [optionOne, optionTwo, user, dispatch]);

  useEffect(() => {
    if (user?.questions?.length > userQ?.current?.length) {
      history.push({ pathname: '/dashboard' });
    }
  }, [user.questions, userQ, history]);

  return (
    <NewQuestionComponent user={user}
      optionOne={optionOne}
      optionTwo={optionTwo}
      handleInputChange={handleInputChange}
      submitNewQ={submitNewQ}
    />)
};

export default NewQuestion;

export { NewQuestion }