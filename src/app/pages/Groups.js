import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Groups = (props) => {
  return <>
    <NavBar />
    <div className='container'>
      <SideBar />
        <h1>
          Group
        </h1>
    </div>
  </>;
};

export default Groups;
