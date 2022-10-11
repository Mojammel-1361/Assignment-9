import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='drop-shadow-lg header'>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Quiz Club.com</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li><a>Quiz</a></li>
      <li><a>chart</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;