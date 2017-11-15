import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ErrorMessage, LoadingButton } from '../../common';

import { changeForm } from '../../../actions';

interface IProps {
  error: any;
  dispatch: any;
  onSubmit: any;
  data: any;
  btnText: any;
  currentlySending: any;
  history: any;
}

export class FormCommunMaster extends React.Component<IProps> {

  static propTypes = {
      dispatch: PropTypes.func,
      data: PropTypes.object,
      onSubmit: PropTypes.func,
      changeForm: PropTypes.func,
      btnText: PropTypes.string,
      error: PropTypes.string,
      currentlySending: PropTypes.bool
  };

  constructor (props) {
    super(props);

    this._onSubmit = this._onSubmit.bind(this);
    this._changeUsername = this._changeUsername.bind(this);
    this._changePassword = this._changePassword.bind(this);
  }
  render () {
    const { error, children } = this.props;

    return (
      <form className="form" onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : null}
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            type="text"
            id="username"
            value={this.props.data.username}
            placeholder="frank.underwood"
            onChange={this._changeUsername}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false} />
          <label className="form__field-label" htmlFor="username">
            Login
          </label>
        </div>
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            id="password"
            type="password"
            value={this.props.data.password}
            placeholder="••••••••••"
            onChange={this._changePassword} />
          <label className="form__field-label" htmlFor="password">
            Password
          </label>
        </div>
        {children}
        <div className="form__submit-btn-wrapper">
          {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <button className="form__submit-btn" type="submit">
              {this.props.btnText}
            </button>
             )}
        </div>
      </form>
    );
  }

  _changeUsername (event: any) {
    this._emitChange({ ...this.props.data, username: event.target.value });
  }

  _changePassword (event: any) {
    this._emitChange({ ...this.props.data, password: event.target.value });
  }

  _emitChange (newFormState: any) {
    this.props.dispatch(changeForm(newFormState));
  }

  _onSubmit (event) {
    event.preventDefault();
    this.props.onSubmit(this.props.data.username, this.props.data.password);
  }
}

// vim: sw=2 ts=2 et:
