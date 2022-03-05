import React from 'react';
import { Link } from 'react-router-dom';

const SignUpHead = (props) => {
  return <div>
        <h1 className='signup__h1'>Sign Up</h1>
        <p className='signup__p'>Welcome back! Login to access the learn app if you want to succed</p>
        <p className='signup__p'>Did you <Link to="/login" className='signup__p__link'>Login</Link> </p>
  </div>;
};

export default SignUpHead;
