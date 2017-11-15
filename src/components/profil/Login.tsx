import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormCommunMaster } from '.';

import { loginRequest } from '../../actions';

export interface IProps {
  dispatch: any;
  data: any;
  history: any;
}

class Login extends React.Component <IProps> {

  static propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
    dispatch: PropTypes.func
  };

  constructor (props) {
    super(props);

    this._login = this._login.bind(this);
  }

  render () {
    const { dispatch } = this.props;
    const { formState, currentlySending, error } = this.props.data;

    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">Login</h2>
          </div>
          <FormCommunMaster data={formState} dispatch={dispatch}
            history={this.props.history} onSubmit={this._login}
            btnText={'Login'} error={error}
            currentlySending={currentlySending} />
        </div>
      </div>
    );
  }

  _login (username, password) {
    this.props.dispatch(loginRequest({ username, password }));
  }

}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login);
// vim: sw=2 ts=2 et:
