import React from 'react';
import faqBanner from './assets/images/faq_banner.png';

const Prospectus = () => {

  return (
    <>
        <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
          <div className='custom-container'>
            <h1>Prospectus</h1>
          </div>
        </section>
        <section className='iframe_sec'>
            <div className='iframe_inner'>
                <iframe src='http://www.canadianvisionmedia.ca/'></iframe>
            </div>
        </section>
    </>
  );
}

export default Prospectus;