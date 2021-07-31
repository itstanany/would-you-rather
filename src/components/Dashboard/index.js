import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Menu, Tab } from 'semantic-ui-react';
import { getAllQ } from '../../store';
import { sortedQSelector } from '../../utils';
import QuestionCard from '../QuestionsView';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { answered, unAnswered } = useSelector(sortedQSelector);
  useEffect(() => {
    dispatch(getAllQ());
  }, [dispatch]);

  const panes = [
    {
      menuItem: (
        <Menu.Item key="unAnswered">
          unAnswered
          {' '}
          <Label>{unAnswered.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane key="unAnswered">
          <QuestionCard qIds={unAnswered} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="answered">
          Answered
          {' '}
          <Label>{answered.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <QuestionCard qIds={answered} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Tab panes={panes} />
  );
};

export default Dashboard;
export { Dashboard };
