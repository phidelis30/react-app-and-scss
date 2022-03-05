import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validateSignUp_3_email } from '../../../../validations/validateSignUp';
import NavBarAuth from '../../../components/NavBarAuth';
import SignUpHead from '../../../components/SignUpHead';
import SignUpImg from '../../../components/SignUpImg';

const SignUp_3_Email = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateSignUp_3_email({ email });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setEmail('');
    setError(null);
    setSuccess('Next level!');
    history.push('/signup/3/code')
  };

  const formData = [
    {
      label: 'Email Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
  ];
  const handlePrevious = () => {
    history.push('/signup/2')
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
          <Link to='/signup/3/phone' className='signup__btn__link'>Use phone number</Link>
          <button className='signup__btn__l' type='submit'>Next</button>
          <button className='signup__btn__g' onClick={()=>handlePrevious()}>
             Previous
          </button>
        </div>
      </div>
    </form>
  </div>
};

export default SignUp_3_Email;