import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import validateLogin from '../../../validations/validateLogin';
import NavBarAuth from '../../components/NavBarAuth';

const Login = (props) => {
  const history = useHistory();
  
  const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      const resultError = validateLogin({ login, password });

      if (resultError !== null) {
        setError(resultError);
        return;
      }
      setLogin('');
      setPassword('');
      setError(null);
      setSuccess('Application was submitted!');
      history.push('/');
    };


    const formData = [
      {
        label: 'Email or Phone number',
        value: login,
        onChange: (e) => setLogin(e.target.value),
        type: 'text',
      },
      {
        label: 'Password',
        value: password,
        onChange: (e) => setPassword(e.target.value),
        type: 'password',
      },
    ];
  return <div>
    <NavBarAuth />
    <form className='login' onSubmit={handleSubmit}>
      <div className='login__img'>
        <img src='/images/1.svg' alt='image-login' />
      </div>
      <div>
        <h1 className='login__h1'>Login</h1>
        <p className='login__p'>Welcome back! Login to access the learn app if you want to succed</p>
        <p className='login__p'>Did you <Link to="/forgetpwd" className='login__p__link'>forget your password</Link> </p>
        {formData.map((el, key) => (
        <div className='login__data' key={key}>
          <label className='login__label'>{el.label}</label>
          <input
            className='login__input'
            type={el.type}
            placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
            value={el.value}
            onChange={el.onChange}
          />
        </div>
        ))}
        <div className='login__checkbox'>
          <input className='login__input' type="checkbox" name='password' placeholder='Password' />
          <label className='login__checkbox__label'>Connexion</label>
        </div>

        <span className='login__span'>
          {error && (
            <p
              className='login__span__orror'
            >
              {error}
            </p>
					)}
					{success && (
            <p
              className='login__span__success'
            >
              {success}
            </p>
					)}
        </span>

        <div className='login__btn'>
          <button className='login__btn__l' type='submit'>Login</button>
          <button className='login__btn__g'>
            <img src='/images/google.svg' alt='google' />
             Login with google
          </button>
        </div>
      </div>
    </form>
  </div>;
};

export default Login;
