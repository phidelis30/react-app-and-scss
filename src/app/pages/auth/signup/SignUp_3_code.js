import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validateSignUp_3_code } from '../../../../validations/validateSignUp';
import NavBarAuth from '../../../components/NavBarAuth';
import SignUpHead from '../../../components/SignUpHead';
import SignUpImg from '../../../components/SignUpImg';

const SignUp_3_code = (props) => {
  const history = useHistory();

  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateSignUp_3_code({ code });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setCode('');
    setError(null);
    setSuccess('Next level!');
    history.push('/signup/4')
  };

  const formData = [
    {
      label: 'Code',
      value: code,
      onChange: (e) => setCode(e.target.value),
      type: 'number',
    },
  ];
  const handlePrevious = () => {
    history.push('/signup/3/phone')
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
            placeholder={`Enter the ${el.label.toLocaleLowerCase()}`}
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
          <button className='signup__btn__g' onClick={()=>handlePrevious()}>
             Previous
          </button>
        </div>
      </div>
    </form>
  </div>
};

export default SignUp_3_code;