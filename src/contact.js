import React from 'react';
import faqBanner from './assets/images/faq_banner.png';

const Contact = () => {
  return (
    <>
      <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
        <div className='custom-container'>
          <h1>Connect With Us</h1>
        </div>
      </section>

      <section className='contact_sec'>
        <div className='contact_inner'>
          <div className='custom-container'>
            <div className='contForm'>
              <form action=''>
                <div className='formGrp'>
                    <label for='name'>Name</label>
                    <input type='text' placeholder='Enter Your Name' id='name'/>
                </div>
                <div className='formGrp'>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='Enter Your Email' id='email'/>
                </div>
                <div className='formGrp'>
                    <label for='subject'>Subject</label>
                    <input type='text' placeholder='Type The Subject' id='subject'/>
                </div>
                <div className='formGrp'>
                    <label for='msg'>Message</label>
                    <textarea placeholder='Type Your Message Here...' id='msg'></textarea>
                </div>
                <div className='formSubmit'>
                    <input type='submit' value='Submit' className='fullButn butn butn_success' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;