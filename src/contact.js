import React, { useState } from 'react';
import faqBanner from './assets/images/faq_banner.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [subject, SetSubject] = useState('')
  const [message, SetMessage] = useState('')
  const handleError = (err) =>
        toast.error(err, {
            position: "top-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
        });
  const handleSubmit = async () => {
   
  

    // setFormSubmitted(true); // Set formSubmitted to true when the button is clicked
    if (name == '' || email == '' || message == '' || subject == '') {
        return
    }
    try {
        // const form = formRef.current;
        // if (!form.check()) {
        //     // The form has validation errors, do not submit
        //     console.error('Form has validation errors');
        //     return;
        // }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
      

       
const apiUrl = 'http://localhost:4000/contact';
// const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/create-booking';
        // Then, send the formData with axios
        const response = await axios.post(apiUrl, formData, {
            
        });

        const { success, message } = response.data;
        if (success) {

            handleSuccess(message);
            setTimeout(() => {
                navigate("/");
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
              <form action=''>
                <div className='formGrp'>
                    <label for='name'>Name</label>
                    <input type='text' placeholder='Enter Your Name' id='name' value={name}/>
                </div>
                <div className='formGrp'>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='Enter Your Email' id='email' value={email}/>
                </div>
                <div className='formGrp'>
                    <label for='subject'>Subject</label>
                    <input type='text' placeholder='Type The Subject' id='subject' value={subject}/>
                </div>
                <div className='formGrp'>
                    <label for='msg'>Message</label>
                    <textarea placeholder='Type Your Message Here...' id='msg' value={message}></textarea>
                </div>
                <div className='formSubmit'>
                    <input type='submit' value='Submit' className='fullButn butn butn_success' onClick={handleSubmit} />
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