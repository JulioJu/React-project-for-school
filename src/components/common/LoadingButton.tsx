import * as React from 'react';
import * as PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';

const LoadingButton: React.StatelessComponent<{className?}> = props => (
  <button className={props.className + ' btn btn--loading'} disabled>
      <LoadingIndicator/>
  </button>
);

LoadingButton.propTypes = {
    className: PropTypes.string
};

export default LoadingButton;
// vim: sw=2 ts=2 et:
