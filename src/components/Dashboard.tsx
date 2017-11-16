import * as React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component<{data}> {

  constructor (props) {
    super(props);
  }

  render() {
    const { user } = this.props.data;
    const statutPro = this.props.data.isFreelance ?
      'a freelance' : 'an enterprise';
    return (
      <article>
        <section className="text-section">
          <h1>Dashboard</h1>
          <p>
            Welcome <strong>{user.username}</strong>, you are logged in! To have a look at the code behind this application,
              go to <a href="https://github.com/sotojuan/saga-login-flow">Github</a>.
            You are {statutPro};
          </p>
        </section>
      </article>
    );
  }

}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps, null)(Dashboard);

// vim: sw=2 ts=2 et:
