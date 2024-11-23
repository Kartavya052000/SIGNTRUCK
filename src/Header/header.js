// components/Header.js
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
// import location from '../assets/images/location.svg';
// import mail from '../assets/images/mail.svg';
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import usericon from '../assets/images/usericon.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const Header = () => {
  const [active, setActive] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const token = cookies['token']

  const [isDropdown, setDropdown] = useState(false)
  const [navbar, SetNavbar] = useState({
    nav1: '',
    nav2: '',
    nav3: '',
    nav4: '',
    nav5: '',
    nav6: '',
  })
  // Create a function to handle user logout
  const handleLogout = async () => {
    try {
      // Send a request to the logout endpoint
      // const response = await axios.post('http://localhost:4000/logout');
      // const response = await axios.post('https://busy-pink-dalmatian-ring.cyclic.app/logout');
      const response = await axios.post('https://signtruckapi.signtruck.ca/logout')

      if (response.status === 200) {
        // Clear the token from cookies and any other cleanup
        // removeCookie('token');
        Object.keys(cookies).forEach((cookie) => {
          removeCookie(cookie)
        })
        // Redirect or perform any other action after successful logout
        // For example, you can redirect the user to the home page
        window.location.href = '/'
      } else {
        console.error('Logout failed', response)
      }
    } catch (error) {
      console.error('Logout failed', error)
    }
  }
  useEffect(() => {
    // Define the API endpoint URL
    // const apiUrl = 'http://localhost:4000/get-navbar';
    // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-navbar';
    const apiUrl = 'https://signtruckapi.signtruck.ca/get-navbar'

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response and update the state with the data
        const { nav1, nav2, nav3, nav4, nav5, nav6 } = response.data.nav[0]
        SetNavbar({
          nav1: nav1 || '',
          nav2: nav2 || '',
          nav3: nav3 || '',
          nav4: nav4 || '',
          nav5: nav5 || '',
          nav6: nav6 || '',
        })
        console.log(navbar, 'NAV')
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error fetching data:', error)
      })

    // Make a GET request to fetch data
  }, [])
  return (
    <header className={`mainHeader ${active ? 'showMenu' : ''}`}>
      <div className='innerHeader'>
        <div className='custom-container'>
          <div className='innerHeaderWrap'>
            {/* <ul className='left_info'>
              <li>
                <span><img src={location} /> BC-1, Surrey, BC, Canada</span>
              </li>
              <li>
                <span><img src={mail} /> <a href='mailto:info@signtruck.ca'>info@signtruck.ca</a></span>
              </li>
            </ul> */}
            <ul className='right_info'>
              {/* <li>
                <a href='#' title='twitter'>
                  <img src={twitter} title='Twitter' alt='Twitter' />
                </a>
              </li> */}
              <li>
                <a href='https://www.facebook.com/signtruck.ca' title='facebook' target='_blank'>
                  <img src={facebook} title='Facebook' alt='Facebook' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/signtruckdotca/' title='instagram' target='_blank'>
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
                <li className='menu_item linkEffect' onClick={() => setActive(false)}>
                  <Link to='/' data-hover={navbar.nav1} title={navbar.nav1}>
                    <span>{navbar.nav1}</span>
                  </Link>
                </li>
                <li className='menu_item linkEffect' onClick={() => setActive(false)}>
                  <Link to='/faqs' data-hover={navbar.nav2} title={navbar.nav2}>
                    <span>{navbar.nav2}</span>
                  </Link>
                </li>
                <li className='menu_item linkEffect' onClick={() => setActive(false)}>
                  <Link to='/clients' data-hover={navbar.nav3} title={navbar.nav3}>
                    <span>{navbar.nav3}</span>
                  </Link>
                </li>
                <li className='menu_item linkEffect' onClick={() => setActive(false)}>
                  <a href='/contact' title={navbar.nav4} data-hover={navbar.nav4}>
                    <span>{navbar.nav4}</span>
                  </a>
                </li>
                <li className='menu_item linkEffect'>
                  {/* <a href='http://www.canadianvisionmedia.ca/' title={navbar.nav5} data-hover={navbar.nav5} target='_blank'><span>{navbar.nav5}</span></a> */}
                  <a href='/prospectus' title={navbar.nav5} data-hover={navbar.nav5}>
                    <span>{navbar.nav5}</span>
                  </a>
                </li>
                <li className='menu_item linkEffect' onClick={() => setActive(false)}>
                  <a href='/get-quote' title={navbar.nav6} data-hover={navbar.nav6}>
                    <span>{navbar.nav6}</span>
                  </a>
                </li>

                {token ? (
                  <li className='menu_item'>
                    <div className={`dropdown ${isDropdown ? 'active' : ''}`}>
                      <span className='dropdown_text' onClick={() => setDropdown(!isDropdown)}>
                        <img src={usericon} />
                        User
                      </span>
                      <div className='dropdown_menu'>
                        <ul>
                          <li className='linkEffect'>
                            <a href='/my-profile' data-hover='My Profile'>
                              <span>My Profile</span>
                            </a>
                          </li>
                          <li className='linkEffect'>
                            <a href='/my-booking' data-hover='My Booking'>
                              <span>My Booking</span>
                            </a>
                          </li>
                          <li className='linkEffect'>
                            <a onClick={handleLogout} data-hover='Logout'>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className='menu_item' onClick={() => setActive(false)}>
                    <Link className='butn butn_success' to='/login' title='Login'>
                      <img src={user} />
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
