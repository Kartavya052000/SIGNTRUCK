// components/Header.js
import React from 'react';
import logo from '../assets/images/logo.png';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='mainHeader'>
      <div className='innerHeader'>
        <div className='custom-container'>
          <div className='innerHeaderWrap'>
            <ul className='left_info'>
              <li>
                <span><img src={location} /> BC-1, Surrey, BC, Canada</span>
              </li>
              <li>
                <span><img src={mail} /> <a href='mailto:info@signtruck.ca'>info@signtruck.ca</a></span>
              </li>
            </ul>
            <ul className='right_info'>
              <li>
                <a href='#' title='twitter'>
                  <img src={twitter} title='Twitter' alt='Twitter' />
                </a>
              </li>
              <li>
                <a href='#' title='facebook'>
                  <img src={facebook} title='Facebook' alt='Facebook' />
                </a>
              </li>
              <li>
                <a href='#' title='instagram'>
                  <img src={instagram} title='Instagram' alt='Instagram' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='custom-container'>
        <div className='header_wrap'>
          <div className='logo'>
            <a href='/' title='SignTruck'>
              <img src={logo} alt='SignTruck' title='SignTruck' />
            </a>
          </div>
          <div className='navigationWrapper'>
            <nav>
              <ul className='nav_menu header_menu'>
                <li className='menu_item linkEffect'>
                  <Link to="/" data-hover="Home" title='Home'><span>Home</span></Link>
                </li>
                <li className='menu_item linkEffect'>
                  <Link to="/faq" data-hover="Faq" title='Faq'><span>Faq</span></Link>
                </li>
                <li className='menu_item linkEffect'>
                <Link to="/clients" data-hover="Clients" title='Clients'><span>Clients</span></Link>
                </li>
                <li className='menu_item linkEffect'>
                  <a href='/contact' title='Contact Us' data-hover="Contact Us"><span>Contact Us</span></a>
                </li>
                {/* <li className='menu_item'>
                  <Link className='butn butn_success' to="/login" title='Login'>Login</Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
