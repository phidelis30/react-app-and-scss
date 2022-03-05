import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Private = (props) => {
  return <>
    <NavBar />
    <div className='container'>
      <SideBar />
        <h1>
          Private
        </h1>
    </div>
  </>;
};

export default Private;
