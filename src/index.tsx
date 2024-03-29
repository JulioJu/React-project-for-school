// tslint:disable-next-line:no-submodule-imports
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';

// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Router, Route, Redirect } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// import { reducer as formReducer } from 'redux-form';

// Redux local config
import reducer from './reducers';
import rootSaga from './sagas';
import { clearError } from './actions';

// history
import history from './history';

// css
import './styles/main.css';

// Import pages
import App from './components/App';
import HomePage from './components/Home';
import { LoginPage, RegisterPage } from './components/profil';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

// Found at https://github.com/reactjs/redux/issues/2481
declare module 'redux' {
  // tslint:disable-next-line
  export interface Store<S> {
    getState(): any;
  }
}

const logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducer
  // form: formReducer
});

// Creates the Redux store using our reducer and the logger and saga middlewares
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
// We run the root saga automatically
sagaMiddleware.run(rootSaga);

function isAuth() {
  const { loggedIn } = store.getState().reducer;
  store.dispatch(clearError());
  if (loggedIn) {
    return true;
  }
  return false;
}

// Both notations are the same
// const HomeWorld = () => (
//     <div>
//         <h2>HomeWorld</h2>
//     </div>
// )
class HelloClass extends React.Component {
  render() {
    return (
      <div><h2>Hellow World</h2>
      </div>
    );
  }
}
const HelloWorld = HelloClass;

// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
// See https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// See also https://stackoverflow.com/questions/42254929/how-to-nest-routes-in-react-router-v4
// See also https://github.com/ReactTraining/react-router/issues/3498
// See also https://github.com/gatsbyjs/gatsby/issues/1913
// See also https://stackoverflow.com/questions/32898264/react-router-authorization (The solution:
// founded thanks search "react-router 4 auth example" in Google)
// I've also espacially seen https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a (doesn't work)
// and https://github.com/ReactTraining/react-router/issues/3854 (nothing interesting)
// etc.
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="wrapper">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
              path="/login"
              // tslint:disable-next-line:jsx-no-lambda
              render={() => !isAuth() ?
            <LoginPage /> : <Redirect to="/" />}
          />
          <Route
              path="/register"
              // tslint:disable-next-line:jsx-no-lambda
              render={() => !isAuth() ?
            <RegisterPage /> : <Redirect to="/" />}
          />
          <Route
              path="/dashboard"
              // tslint:disable-next-line:jsx-no-lambda
              render={() => isAuth() ?
            <Dashboard /> : <Redirect to="/login" />}
          />
          <Route path="/hello-world" component={HelloWorld} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
// vim: sw=2 ts=2 et:
