import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout-wrapper'>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/my'>My</Link>
      </div>
    )
  }
}
