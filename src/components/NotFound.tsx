import * as React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render () {
    return (
      <article>
        <h1>Page not found.</h1>
        <Link to="/" className="btn">Home</Link>
      </article>
    );
  }
}

export default NotFound;
