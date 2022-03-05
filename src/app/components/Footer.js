import React from 'react';
import Logo from './Logo'
import { footerData, footerSocialData } from '../../data/FooterData';

const Footer = (props) => {
  return <footer className='footer'>
      <div className='row'>
        <div className='col-2'>
          <Logo />
        </div>
        <div className='col-5'>
          <ul className='footer__ul'>
            {footerData.map((data, key) =>
            <li key={key} className='footer__data'>{data.title}</li>
            )}
          </ul>
        </div>
        <div className='col-5'>
          <ul className='footer__ul-social'>
          {footerSocialData.map((data, key) =>
            <li key={key} className='footer__social'>{data.icon}</li>
            )}
          </ul>
        </div>
      </div>
    </footer>;
};

export default Footer;
