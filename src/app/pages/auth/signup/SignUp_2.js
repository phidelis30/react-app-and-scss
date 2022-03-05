import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validateSignUp_2 } from '../../../../validations/validateSignUp';
import NavBarAuth from '../../../components/NavBarAuth';
import SignUpHead from '../../../components/SignUpHead';
import SignUpImg from '../../../components/SignUpImg';

const SignUp_2 = (props) => {
  const history = useHistory();

  const [sexe, setSexe] = useState('');
  const [adress, setAdress] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateSignUp_2({ sexe, adress, country });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setSexe('');
    setAdress('');
    setCountry('');
    setError(null);
    setSuccess('Next level!');
    history.push('/signup/3/phone');
  };

  const formData = [
    {
      label: 'Adress',
      value: adress,
      onChange: (e) => setAdress(e.target.value),
      type: 'text',
    },

    {
      label: 'Country',
      value: country,
      onChange: (e) => setCountry(e.target.value),
      type: 'text',
    },
  ];
  const handlePrevious = () => {
    history.push('/signup/1')
  }
  return <div>
    <NavBarAuth />
    <form className='signup' onSubmit={handleSubmit}>
      <SignUpImg />
      <div>
        <SignUpHead />
        <div className='signup__data'>
            <label className='sign__label'>Sexe</label>
            <select
              className='signup__input'
              onChange={(e) => setSexe(e.target.value)}
              value={sexe}
            >
              <option value="">Select your sexe</option>
              <option value="M">Male</option>
              <option value="F">Feminine</option>
              <option value="O">Other</option>
            </select>
        </div>
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
          <button className='signup__btn__g' onClick={()=>handlePrevious()}>
             Previous
          </button>
        </div>
      </div>
    </form>
  </div>
};

export default SignUp_2;