import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { navBarData } from '../../data/NavBarData';
import Logo from './Logo';

const NavBar = (props) => {
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
      <nav className='nav'>
            <div className='navbar'>
                <div className='navbar__left'>
                    <Logo />
                </div>
                
                <div className='navbar__search'>
                    <input className='navbar__search__input' placeholder='Search' type='text' name='search'/>
                    <FaSearch className='navbar__search__icon'/>
                </div>
                <div className='navbar__right'>
                    <ul className='navbar__items'>
                        {navBarData.map((el, index)=>
                        <li key={index} className='navbar__lists'>
                            <NavLink
                                    to={el.to}
                                    className='navbar__link link'
                                    aria-label={el.name}
                                >
                                    {el.icon}
                                </NavLink>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
            <button className='navbar__btn'>
                <FaUserCircle />
            </button>
      </nav>
      );
};

export default NavBar;
