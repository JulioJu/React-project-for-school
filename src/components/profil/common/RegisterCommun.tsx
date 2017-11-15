import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormCommunMaster, FormCommunDetailled } from '../';

import { registerRequest } from '../../../actions';

class RegisterCommun extends React.Component<{dispatch, history, data}> {

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
    const { dispatch, children } = this.props;
    const { formState, currentlySending, error } = this.props.data;

    return (
      <FormCommunMaster data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register}
            btnText={'Register'} error={error} currentlySending={currentlySending} >
        <FormCommunDetailled />
        {children}
      </FormCommunMaster>
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

export default connect(select)(RegisterCommun);
// vim: sw=2 ts=2 et:
