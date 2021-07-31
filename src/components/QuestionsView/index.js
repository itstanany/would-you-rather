import { useSelector } from 'react-redux';
import { Item } from 'semantic-ui-react';
import { questionsSelector, usersSelector } from '../../utils';
import { QuestionCard } from '../QuestionCard';

const QuestionsView = ({ qIds }) => {
  const { questions } = useSelector(questionsSelector);
  const { users } = useSelector(usersSelector);
  return (
    <Item.Group>
      {
        qIds.map((qId) => (
          <QuestionCard
            key={qId}
            question={questions[qId]}
            user={users[questions[qId]?.author]}
          />
        ))
      }
    </Item.Group>
  );
};

export default QuestionsView;
export {
  QuestionsView,
};
