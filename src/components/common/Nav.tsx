import * as React from 'react';
import * as PropTypes from 'prop-types';
import LoadingButton from './LoadingButton';
import { Link } from 'react-router-dom';

import { logout, clearError } from '../../actions';

interface IProps {
  loggedIn: any;
  currentlySending: any;
  dispatch: any;
  history: any;
  location: any;
}

class Nav extends React.Component<IProps> {

  static propTypes = {
      loggedIn: PropTypes.bool,
      currentlySending: PropTypes.bool,
      dispatch: PropTypes.func
  };

  constructor (props) {
    super(props);
    this._logout = this._logout.bind(this);
    this._clearError = this._clearError.bind(this);
  }

  render () {
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link to="/dashboard" className="btn btn--dash btn--nav">Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className="btn--nav" />
        ) : (
          <button className="btn btn--login btn--nav" onClick={this._logout}>Logout</button>
        )}
      </div>
    ) : (
      <div>
        <Link to="/register" className="btn btn--login btn--nav" onClick={this._clearError}>Register</Link>
        <Link to="/login" className="btn btn--login btn--nav" onClick={this._clearError}>Login</Link>
      </div>
    );

    return (
      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper" onClick={this._clearError}>
            <h1 className="nav__logo">Login&nbsp;Flow</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    );
  }

  _logout () {
    this.props.dispatch(logout());
  }

  _clearError () {
    this.props.dispatch(clearError());
  }
}

export default Nav;
// vim: sw=2 ts=2 et:
