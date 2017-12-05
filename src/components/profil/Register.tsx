import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormWrapper } from '../common';
import { FormCompany, FormFreelance, FormCommunMaster
  , FormCommunDetailled } from './';

import { registerRequest } from '../../actions';

// Found at https://github.com/reactjs/redux/issues/2481
declare module 'redux' {
  // tslint:disable-next-line
  export interface Element {
    getState(): any;
  }
}

class RegisterCommun extends
  React.Component<{dispatch, history, data}, {isFreelance, isCompany}> {

  static propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
    dispatch: PropTypes.func
  };

  companyOrFreelanceComponent;

  constructor (props: any) {
    super(props);
    this._register = this._register.bind(this);
    this.state = {
      isFreelance: false,
      isCompany: false
    };
  }

  onClickSetFeelance(isFreenlanceCust: boolean): void {
    isFreenlanceCust ?
      this.setState({
        isFreelance: true,
        isCompany: false
      })
      : this.setState({
        isFreelance: false,
        isCompany: true
        });
  }

  render () {
    const { dispatch, children } = this.props;
    const { formState, currentlySending, error } = this.props.data;

    return (
      <FormWrapper title="Register">
        <FormCommunMaster data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register}
              btnText={'Register'} error={error} currentlySending={currentlySending} >
          <FormCommunDetailled />
          {children}
        <br />
        <div>
          <input type="radio" name="isFreelance" value="freelance" onClick={this.onClickSetFeelance.bind(this, true)} />
          <label htmlFor="freelance">Freelance</label>
          <br />
          <input type="radio" name="isFreelance" value="company" onClick={this.onClickSetFeelance.bind(this, false)} />
          <label htmlFor="company">Company</label>
        </div>
          {this.state.isFreelance && <FormFreelance / >}
          {this.state.isCompany && <FormCompany />}
          </FormCommunMaster>
      </FormWrapper>
    );
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({ username, password }));
  }
}

function select(state) {
  return {
    data: state.reducer
  };
}

export default connect(select)(RegisterCommun);
// vim: sw=2 ts=2 et:
