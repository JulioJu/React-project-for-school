import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route} from 'react-router-dom';

// Both notations are the same
// const HomePage = () => (
//     <div>
//         <h2>HomePage</h2>
//     </div>
// )
class HelloClass extends React.Component {
    render() {
        return (
            <div><h2>Home22</h2>
            </div>
        );
    }
}

const HomePage = HelloClass;

const LoginPage = () => (
    <div>
        <h2>LoginPage</h2>
    </div>
)

const RegisterPage = () => (
    <div>
        <h2>RegisterPage</h2>
    </div>
)

const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
    </div>
)

const NotFound = () => (
    <div>
        <h2>NotFound</h2>
    </div>
)
// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
