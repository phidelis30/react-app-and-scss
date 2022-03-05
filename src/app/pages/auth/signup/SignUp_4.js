import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validateSignUp_4 } from '../../../../validations/validateSignUp';
import NavBarAuth from '../../../components/NavBarAuth';
import SignUpHead from '../../../components/SignUpHead';
import SignUpImg from '../../../components/SignUpImg';

const SignUp_4 = (props) => {
  const history = useHistory();

  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateSignUp_4({ password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setPassword('');
    setConfirmPass('');
    setError(null);
    setSuccess('Compte was created!');
    history.push('/');
  };

  const formData = [
    {
      label: 'New PassWord',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: 'password',
    },

    {
      label: 'Confirm Password',
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: 'password',
    },
  ];
  const handlePrevious = () => {
    history.push('/signup/3/code')
  }
  return <div>
    <NavBarAuth />
    <form className='signup' onSubmit={handleSubmit}>
      <SignUpImg />
      <div>
        <SignUpHead />
        {formData.map((el, key) => (
        <div className='signup__data' key={key}>
            <label className='sign__label'>{el.label}</label>
          <input
            className='signup__input'
            type={el.type}
            placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
            value={el.value}
            onChange={el.onChange}
          />
        </div>
        ))}

        <span className='signup__span'>
          {error && (
            <p
              className='signup__span__orror'
            >
              {error}
            </p>
					)}
					{success && (
            <p
              className='signup__span__success'
            >
              {success}
            </p>
					)}
        </span>

        <div className='signup__btn'>
          <button className='signup__btn__l' type='submit'>Save</button>
          <button className='signup__btn__g' onClick={()=>handlePrevious()}>
             Previous
          </button>
        </div>
      </div>
    </form>
  </div>
};

export default SignUp_4;