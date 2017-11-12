import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './common/Form';

import { registerRequest } from '../actions';

class Register extends React.Component<{dispatch, history, data}> {

  static propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
    dispatch: PropTypes.func
  };

  constructor (props: any) {
    super(props);

    this._register = this._register.bind(this);
  }

  render () {
    const { dispatch } = this.props;
    const { formState, currentlySending, error } = this.props.data;

    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">Register</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register}
                btnText={'Register'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    );
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({ username, password }));
  }
}

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(Register);