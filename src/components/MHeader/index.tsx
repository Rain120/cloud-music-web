import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/my'>My</NavLink>
      </div>
    )
  }
}
