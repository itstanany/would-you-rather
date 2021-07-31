import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { saveAnswer } from "../../store";
import { questionsSelector, usersSelector, userSelector } from '../../utils'
import QuestionDetailComponent from "./QuestionDetail.component";

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { questions } = useSelector(questionsSelector);
  const { users } = useSelector(usersSelector);
  const {
    user: currentUser
  } = useSelector(userSelector);
  const [checkedItem, setCheckedItem] = useState('');
  const question = useRef(questions[id]);
  const authorUser = useRef(users[question?.current?.author] || {});
  const [totalVotes, setTotalVotes] = useState(question?.current?.optionOne?.votes?.length + question?.current?.optionTwo?.votes?.length);
  useEffect(() => {
    question.current = questions[id];
  }, [questions, id]);
  useEffect(() => {
    authorUser.current = users[question?.current?.author] || {};
  }, [users, question]);

  const handleChangeCheck = useCallback((e, { value }) => {
    setCheckedItem(value);
  }, [setCheckedItem]);

  const submitAnswer = useCallback((e) => {
    e.preventDefault();
    dispatch(saveAnswer({ answer: checkedItem, qId: id }))
  }, [checkedItem, id, dispatch]);

  useEffect(() => {
    setTotalVotes(question?.current?.optionOne?.votes?.length + question?.current?.optionTwo?.votes?.length)
  }, [question]);

  return (
    <QuestionDetailComponent
      question={question.current}
      submitAnswer={submitAnswer}
      handleChangeCheck={handleChangeCheck}
      id={id}
      currentUser={currentUser}
      checkedItem={checkedItem}
      user={authorUser.current}
      totalVotes={totalVotes}
    />
  );
}


export default QuestionDetail;

export {
  QuestionDetail,
}