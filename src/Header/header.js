// components/Header.js
import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import usericon from '../assets/images/usericon.png';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Header = () => {
  const [active, setActive] = useState(false);
const [cookies, setCookie, removeCookie] = useCookies(['token']);
const token = cookies['token'];

console.log(cookies['token']);

const [isDropdown, setDropdown] = useState(false);
 // Create a function to handle user logout
 const handleLogout = async () => {
  try {
    // Send a request to the logout endpoint
    const response = await axios.post('http://localhost:4000/logout');

    if (response.status === 200) {
      // Clear the token from cookies and any other cleanup
      removeCookie('token');
      // Redirect or perform any other action after successful logout
      // For example, you can redirect the user to the home page
      window.location.href = '/';
    } else {
      console.error('Logout failed', response);
    }
  } catch (error) {
    console.error('Logout failed', error);
  }
};
  return (
    <header className={`mainHeader ${active ? 'showMenu' : ''}`}>
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
          <div className='hamburger' onClick={() => setActive(!active)}>
            <span className='bar'></span>
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
                <li className='menu_item linkEffect'>
                  <a href='/booking' title='Booking' data-hover="Booking"><span>Booking</span></a>
                </li>
                
                {token ? (
                  <li className='menu_item'>
                    <div className={`dropdown ${isDropdown ? 'active' : ''}`}>
                      <span className='dropdown_text' onClick={()=> setDropdown(!isDropdown)}><img src={usericon} />User</span>
                      <div className='dropdown_menu'>
                        <ul>
                          <li className='linkEffect'><a href='#' data-hover="My Profile"><span>My Profile</span></a></li>
                          <li className='linkEffect'><a href='#' data-hover="My Booking"><span>My Booking</span></a></li>
                          <li className='linkEffect'><a onClick={handleLogout}  data-hover="Logout"><span >Logout</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className='menu_item'>
                    <Link className='butn butn_success' to="/login" title='Login'>Login</Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
