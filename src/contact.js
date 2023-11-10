import React, { useState } from 'react';
import faqBanner from './assets/images/faq_banner.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import { Form } from 'rsuite';

const Contact = () => {
  const navigate = useNavigate();

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [subject, SetSubject] = useState('')
  const [mainmessage, SetMessage] = useState('')
  const handleError = (err) =>
        toast.error(err, {
            position: "top-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
        });
  const handleSubmit = async () => {
  //  alert('hit')
  

    // setFormSubmitted(true); // Set formSubmitted to true when the button is clicked
    // if (name == '' || email == '' || message == '' || subject == '') {
    //     return
    // }
    try {
     
     const formData={
      name,
      email,
      subject,
      message:mainmessage
     }
      

       
const apiUrl = 'http://localhost:4000/contact';
// const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/create-booking';
        // Then, send the formData with axios
        const response = await axios.post(apiUrl, formData, {
            
        });

        const { success, message } = response.data;
        if (success) {

            handleSuccess(message);
            setTimeout(() => {
                // navigate("/");
            }, 1000);
        } else {
            console.log(response.data, "SSSS");
            // alert(message);
            handleError(message);
        }

    } catch (error) {
        handleError();

        console.error('API request failed', error);
    }
};
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
            <Form  onSubmit={handleSubmit}>
                <div className='formGrp'>
                  <label for='name'>Name</label>
                  <input type='text' placeholder='Enter Your Name' id='name' value={name} onChange={event => SetName(event.target.value)} />
                </div>
                <div className='formGrp'>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='Enter Your Email' id='email' value={email} onChange={event => SetEmail(event.target.value)} />
                </div>
                <div className='formGrp'>
                    <label for='subject'>Subject</label>
                    <input type='text' placeholder='Type The Subject' id='subject' value={subject} onChange={event => SetSubject(event.target.value)} />
                </div>
                <div className='formGrp'>
                    <label for='msg'>Message</label>
                    <textarea placeholder='Type Your Message Here...' id='msg' value={mainmessage} onChange={event => SetMessage(event.target.value)}></textarea>
                </div>
                <div className='formSubmit'>
                    <input type='submit' value='Submit' className='fullButn butn butn_success' onClick={handleSubmit} />
                    {/* <Button className='butn butn_success butn_sm' type="submit">Book Now</Button> */}

                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;