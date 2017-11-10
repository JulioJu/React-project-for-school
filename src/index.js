import 'babel-polyfill'

import registerServiceWorker from './registerServiceWorker';

// React
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter, Route} from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'

// Redux local config
import reducer from './reducers'
import rootSaga from './sagas'
import {clearError} from './actions'

// history
import history from './history'

// css
import './styles/main.css'

// Import pages
import App from './components/App'
import HomePage from './components/Home'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

const logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware()

// Creates the Redux store using our reducer and the logger and saga middlewares
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
// We run the root saga automatically
sagaMiddleware.run(rootSaga)

/**
* Checks authentication status on route change
* @param  {object}   nextState The state we want to change into when we change routes
* @param  {function} replace Function provided by React Router to replace the location
*/
function checkAuth (nextState, replace) {
  const {loggedIn} = store.getState()

  store.dispatch(clearError())

  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
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
const HelloWorld = HelloClass

// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
// See https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// See also https://stackoverflow.com/questions/42254929/how-to-nest-routes-in-react-router-v4
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div className="wrapper">
                <Route component={App} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/hello-world" component={HelloWorld} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
