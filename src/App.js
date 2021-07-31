import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';
import { Page } from './components/Page';
import { Login } from './components/Login';

function App() {
  return (
    <div className="myContainer">
      <Switch>
        <Route path="/login" component={Login} />
        <Page />
      </Switch>
    </div>
  );
}

export default App;
