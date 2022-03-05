import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Messaging = (props) => {
  return <>
    <NavBar />
    <div className='container'>
      <SideBar />
        <h1>
          Message
        </h1>
    </div>
  </>;
};

export default Messaging;
