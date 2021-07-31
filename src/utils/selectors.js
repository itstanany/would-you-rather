import { createSelector } from 'reselect';

const userSelector = (state) => (state.user);
const questionsSelector = (state) => (state.questions);
const usersSelector = (state) => state.users;

const sortByDate = ({ questions }) => (
  Object.keys(questions)
    .sort((qIdA, qIdB) => questions[qIdB]?.timestamp - questions[qIdA]?.timestamp));

const sortedQHandler = (user, questions) => {
  const answered = [];
  const unAnswered = [];
  const sortedQIdsByDate = sortByDate({ questions: questions.questions });
  sortedQIdsByDate.forEach((qId) => {
    if (user.user.answers[qId]) {
      answered.push(qId);
      return;
    }
    unAnswered.push(qId);
  });
  // Object.keys(questions.questions).forEach((q) => {
  //   if (user.user.answers[q]) {
  //     answered.push(q);
  //     return;
  //   }
  //   unAnswered.push(q);
  // });
  return {
    answered,
    unAnswered,
  };
};

const sortedQSelector = createSelector([userSelector, questionsSelector], sortedQHandler);

export {
  sortedQSelector,
  userSelector,
  usersSelector,
  questionsSelector,
};
