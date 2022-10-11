import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='drop-shadow-lg header'>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <p className="btn btn-ghost normal-case text-xl">Quiz Club.com</p>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link> </li>
      <li><Link to='/questions'>Questions</Link> </li>
      <li><Link to='/chart'>Chart</Link> </li>
      
    </ul>
  </div>
</div>  
        </div>
    );
};

export default Header;