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

class RegisterCommun extends React.Component<{dispatch, history, data}> {

  static propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
    dispatch: PropTypes.func
  };

  isFreelance;
  companyOrFreelanceComponent;

  constructor (props: any) {
    super(props);
    this.isFreelance = true;
    this._register = this._register.bind(this);
    this.setFreelance = this.setFreelance.bind(this);
  }

  setFreelance () {
    const elt: any = document.querySelector('input[name="isFreelance"]:checked');
    if (elt.value !== undefined) {
      if (elt.value === 'freelance') {
        this.companyOrFreelanceComponent = (<FormCompany />);
      } else if (elt.value === 'company') {
        this.companyOrFreelanceComponent = (<FormFreelance />);
      } else {
        this.isFreelance = null;
      }
    }
    this.forceUpdate();
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
        <input type="radio" name="isFreelance" value="freelance" onClick={this.setFreelance} />
        <label htmlFor="freelance">Freelance</label>
        <br />
        <input type="radio" name="isFreelance" value="company" onClick={this.setFreelance} />
        <label htmlFor="company">Company</label>
        </div>
        {this.companyOrFreelanceComponent}
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
