import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/reducers';

// Import pages
import HomePage from './components/pages/HomePage.react';
import LoginPage from './components/pages/LoginPage.react';
import RegisterPage from './components/pages/RegisterPage.react';
import Dashboard from './components/pages/Dashboard.react';
import NotFound from './components/pages/NotFound.react';
import App from './components/App.react';

// Import the CSS file, which webpack transfers to the build folder
import './css/main.css';

// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(homeReducer);

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

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
// See https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// See also https://stackoverflow.com/questions/42254929/how-to-nest-routes-in-react-router-v4
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
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
