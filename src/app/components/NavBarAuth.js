import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const NavBarAuth = (props) => {
    // const [state, setState] = useState(false);
    // useEffect (() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, [])
    // const handleScroll = () => {
    //     if(window.scrollY > 120) {
    //         setState(true)
    //     } else {
    //         setState(false)
    //     }
    // }
  return (
      <nav className='navbarauth'>
          <Logo />
          <ul className='navbarauth__items'>
              <li className='navbarauth__lists'>
                  <NavLink className='navbarauth__link' to="/login" >Login</NavLink>
              </li>
              <li className='navbarauth__lists'>
                  <NavLink className='navbarauth__link' to="/signup/1" >Sign Up</NavLink>
              </li>
          </ul>
      </nav>
      );
};

export default NavBarAuth;
