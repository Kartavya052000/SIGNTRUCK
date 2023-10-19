// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section className='footer-sec'>
        <div className='custom-container'>
          <div className='custom-row'>
            <div className='custom-col-6'></div>
            <div className='custom-col-3'></div>
            <div className='custom-col-3'></div>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <div className='custom-container'>
          <span>&copy; {new Date().getFullYear()} by Signtruck</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
