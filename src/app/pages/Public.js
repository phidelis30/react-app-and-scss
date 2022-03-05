import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Public = (props) => {
  return <>
    <NavBar />
    <div className='container'>
      <SideBar />
        <h1>
          Public
        </h1>
    </div>
  </>;
};

export default Public;
