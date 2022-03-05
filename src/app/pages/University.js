import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Univesity = (props) => {
  return <>
    <NavBar />
    <div className='container'>
      <SideBar />
        <h1>
          university
        </h1>
    </div>
  </>;
};

export default Univesity;
