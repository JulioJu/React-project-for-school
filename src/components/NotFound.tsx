import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

class NotFound extends Component {
  render () {
    return (
      <article>
        <h1>Page not found.</h1>
        <Link to='/' className='btn'>Home</Link>
      </article>
    )
  }
}

export default NotFound
