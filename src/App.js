import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ClimaDetail from './pages/ClimaDetail';
import Climas from './pages/Climas';
import './App.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/climas" exact>
            <Climas />
          </Route>
          <Route path="/climas/:climaId">
            <ClimaDetail />
          </Route>
          <Route path="*">
            <Redirect to="/climas" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
