import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Home = (props) => {
  return <>
    <NavBar />
    <div className='container'>
      <SideBar />
        <h1>
          Home
        </h1>
    </div>
  </>;
};

export default Home;
