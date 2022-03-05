import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validateSignUp_1 } from '../../../../validations/validateSignUp';
import NavBarAuth from '../../../components/NavBarAuth';
import SignUpHead from '../../../components/SignUpHead';
import SignUpImg from '../../../components/SignUpImg';

const SignUp_1 = (props) => {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateSignUp_1({ firstName, lastName, dateBirth });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setFirstName('');
    setLastName('');
    setDateBirth('');
    setError(null);
    setSuccess('Next level!');
    history.push('/signup/2')
  };


  const formData = [
    {
      label: 'First Name',
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      type: 'text',
    },
    {
      label: 'Last Name',
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      type: 'text',
    },

    {
      label: 'Date Birthday',
      value: dateBirth,
      onChange: (e) => setDateBirth(e.target.value),
      type: 'date',
    },
  ];
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
          <button className='signup__btn__l' type='submit'>Next</button>
          <button className='signup__btn__g'>
            <img src='/images/google.svg' alt='google' />
             Sign up with google
          </button>
        </div>
      </div>
    </form>
  </div>;
};

export default SignUp_1;
