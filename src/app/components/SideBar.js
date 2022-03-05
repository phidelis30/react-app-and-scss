import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sideBarData } from '../../data/SideBarData';

const SideBar = (props) => {
  return <nav className='sidebar'>
      <ul className='sidebar__items'>
        {sideBarData.map((el, key) => (
          <li key={key} className='sidebar__lists'>
            <Link to={el.to} className='sidebar__navlink'>
              {el.icon}<b>{el.name}</b>
            </Link>
          </li>
        ))}
      </ul>
    </nav>;
};

export default SideBar;
