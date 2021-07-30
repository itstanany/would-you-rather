import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Page } from './components/Page';
import { Login } from './components/Login';
function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Page />
    </Switch>
  );
}

export default App;
