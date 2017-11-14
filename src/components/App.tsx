import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from './common/Nav';

interface IProps {
  data: any;
  history: any;
  dispatch: any;
  location: any;
}

class App extends React.Component<IProps> {

  static propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
    children: PropTypes.object,
    dispatch: PropTypes.func
  };

  render () {
    return (
      <div>
        <Nav loggedIn={this.props.data.loggedIn}
          currentlySending={this.props.data.currentlySending}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(App);
// vim: sw=2 ts=2 et:
