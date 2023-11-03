import React from 'react';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';

const Footer = () => {
  return (
    <footer>
      <section className='footer-sec'>
        <div className='custom-container'>
          <div className='custom_row'>
            <div className='footerCol-6'>
              <div className='footerCol_inner'>
                <h4>Our Mission</h4>
                <p>Signtruck, unlike any other advertising platform allows us to deliver your message any time, any place!</p>
                <ul className='social_info'>
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
            <div className='footerCol-3'>
              <div className='footerCol_inner'>
                  <h4>Quick Links</h4>
                  <ul className='foot_menu'>
                    <li className='linkEffect'>
                      <a href='#' title='Home' data-hover="Home"><span>Home</span></a>
                    </li>
                    <li className='linkEffect'>
                      <a href='#' title='FAQ' data-hover="FAQ"><span>FAQ</span></a>
                    </li>
                    <li className='linkEffect'>
                      <a href='#' title='Clients' data-hover="Clients"><span>Clients</span></a>
                    </li>
                    <li className='linkEffect'>
                      <a href='#' title='Contact Us' data-hover="Contact Us"><span>Contact Us</span></a>
                    </li>
                  </ul>
              </div>
            </div>
            <div className='footerCol-3'>
            <div className='footerCol_inner'>
                  <h4>Contact Us</h4>
                  <ul className='address'>
                    <li>
                      <span><img src={location} /> BC-1, Surrey, BC, Canada</span>
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
