import * as React from 'react';
import * as PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';

const LoadingButton: React.StatelessComponent<{className?}> = props => (
  <a className={props.className + ' btn btn--loading'} disabled>
      <LoadingIndicator/>
  </a>);

LoadingButton.propTypes = {
    className: PropTypes.string
};

export default LoadingButton;