import * as React from 'react';
import * as PropTypes from 'prop-types';

const ErrorMessage: React.StatelessComponent<{error}> = props => (
    <div className="form__error-wrapper js-form__err-animation">
      <p className="form__error">
        {props.error}
      </p>
    </div>
  );

ErrorMessage.propTypes = {
  error: PropTypes.string
};

export default ErrorMessage;
// vim: sw=2 ts=2 et:
