import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validateForgetPwd from '../../../validations/validateForgetPwd';
import NavBarAuth from '../../components/NavBarAuth';

const ForgetPwd = (props) => {
    const [login, setLogin] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      const resultError = validateForgetPwd({ login });

      if (resultError !== null) {
        setError(resultError);
        return;
      }
      setLogin('');
      setError(null);
      setSuccess('Watched in email or in phone number was submitted!');
    };


    const formData = [
      {
        label: 'Email or Phone number',
        value: login,
        onChange: (e) => setLogin(e.target.value),
        type: 'text',
      },
    ];
  return <div>
    <NavBarAuth />
    <form className='forgetPwd' onSubmit={handleSubmit}>
      <div className='forgetPwd__img'>
        <img src='/images/dreamer.svg' alt='image-forgetPwd' />
      </div>
      <div>
        <h1 className='forgetPwd__h1'>Forget Password</h1>
        <p className='forgetPwd__p'>Welcome back! Login to access the learn app if you reset your pasword</p>
        <p className='forgetPwd__p'>Did you <Link to="/login" className='signup__p__link'>Login</Link> </p>
        {formData.map((el, key) => (
        <div className='forgetPwd__data' key={key}>
          <label className='forgetPwd__label'>{el.label}</label>
          <input
            className='forgetPwd__input'
            type={el.type}
            placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
            value={el.value}
            onChange={el.onChange}
          />
        </div>
        ))}

        <span className='forgetPwd__span'>
          {error && (
            <p
              className='forgetPwd__span__orror'
            >
              {error}
            </p>
					)}
					{success && (
            <p
              className='forgetPwd__span__success'
            >
              {success}
            </p>
					)}
        </span>

        <div className='forgetPwd__btn'>
          <button className='forgetPwd__btn__l' type='submit'>Reset password</button>
        </div>
      </div>
    </form>
      
  </div>;
};

export default ForgetPwd;
