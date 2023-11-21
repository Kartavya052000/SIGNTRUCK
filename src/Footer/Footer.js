import React, { useEffect, useState } from 'react';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Footer = () => {

  const [footernavbar, SetFooterNavbar] = useState({
    nav1: "",
    nav2: "",
    nav3: "",
    nav4: "",
    nav5: "",
    nav6: "",
  })

  useEffect(() => {
    // const apiUrl = 'http://localhost:4000/get-navbar';
    // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-navbar';
const apiUrl = 'https://signtruckapi.signtruck.ca/get-navbar';
    axios.get(apiUrl)
        .then((response) => {
            const { nav1, nav2, nav3, nav4, nav5, nav6 } = response.data.nav[0];
            SetFooterNavbar({
                nav1: nav1 || "",
                nav2: nav2 || "",
                nav3: nav3 || "",
                nav4: nav4 || "",
                nav5: nav5 || "",
                nav6: nav6 || "",
            });
            // console.log(footernavbar, "Footer nav");
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
  }, [])

  return (
    <footer>
      <section className='footer-sec'>
        <div className='custom-container'>
          <div className='custom_row'>
            <div className='footerCol-6'>
              <div className='footerCol_inner'>
                <h4>Our Mission</h4>
                <p>At Signtruck, we revolutionize the way businesses connect with their target audiences. Our dynamic fleet of mobile billboards transforms ordinary trucks into powerful advertising mediums, delivering your brand's message to the streets, highways, and events that matter most.</p>
                <ul className='social_info'>
                  <li>
                    <a href='#' title='twitter'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/profile.php?id=100066472372793&mibextid=ZbWKwL' title='facebook'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://instagram.com/signtruck.ca' title='instagram'>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footerCol-3'>
              <div className='footerCol_inner'>
                  <h4>Quick Links</h4>
                  <ul className='foot_menu'>
                    <li>
                      <Link to="/" title={footernavbar.nav1}>{footernavbar.nav1}</Link>
                    </li>
                    <li>
                    <Link to="/faq" title={footernavbar.nav2}>{footernavbar.nav2}</Link>
                    </li>
                    <li>
                      <Link to="/clients" title={footernavbar.nav3}>{footernavbar.nav3}</Link>
                    </li>
                    <li>
                      <Link to="/contact" title={footernavbar.nav4}>{footernavbar.nav4}</Link>
                    </li>
                    <li>
                      <Link to="http://www.canadianvisionmedia.ca/" title={footernavbar.nav5}>{footernavbar.nav5}</Link>
                    </li>
                    <li>
                      <Link to="/booking" title={footernavbar.nav6}>{footernavbar.nav6}</Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className='footerCol-3'>
            <div className='footerCol_inner'>
                  <h4>Contact Us</h4>
                  <ul className='address'>
                    <li>
                      <span><img src={location} /> 13231 72 Ave, Surrey, BC V3W 2N5</span>
                    </li>
                    <li>
                      <span><img src={mail} /><a href='mailto:info@signtruck.ca' title='info@signtruck.ca'>info@signtruck.ca</a></span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <div className='custom-container'>
          {/* <span>&copy; {new Date().getFullYear()} by Signtruck</span> */}
          <p>
            <a property="dct:title" rel="cc:attributionURL" href="https://www.signtruck.ca/">SignTruck</a>{" "}by{" "}
            <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.signtruck.ca/">
              Signtruck
            </a>{" "}
            is marked with{" "}
            <a
              href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              CC0 1.0
              <img
                style={{
                  height: "22px!important",
                  marginLeft: "3px",
                  verticalAlign: "text-bottom",
                }}
                src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                alt="CC"
              />
              <img
                style={{
                  height: "22px!important",
                  marginLeft: "3px",
                  verticalAlign: "text-bottom",
                }}
                src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"
                alt="CC0"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
