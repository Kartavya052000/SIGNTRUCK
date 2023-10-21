// components/Header.js
import React from 'react';
import jiffylube from './assets/images/jiffylube.png';
import duda from './assets/images/duda.png';
import autoworld from './assets/images/autoworld.png';
import news1130 from './assets/images/news1130.png';
import dawsonsawyer from './assets/images/dawsonsawyer.png';
import mikemafori from './assets/images/mikemafori.png';
import trucks from './assets/images/storyTruck.png';
import truck from './assets/images/truck.png';
import heroBanner from './assets/images/banner.png';

const Home = () => {
  return (
    <>
    <section className='hero_sec' style={{backgroundImage: `url(${heroBanner})`}}>
        <div className='hero_overlay'></div>
        <div className='custom-container'>
            <div className='hero_inner'>
                <div className='hero_info'>
                    <span>A No-Limits Creative Agency</span>
                    <h2>Propel Your Brand With SignTruck <span>SignTruck</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt libero et odio convallis, vitae fermentum odio rhoncus.</p>
                    <a href='#' title='Contact Us' className='butn butn_success'><span>Contact Us</span></a>
                </div>
            </div>
        </div>
        <div className='scrollDown'>
            <a href='javacript:void(0)' title='Scroll Down'><span>&#8592;</span>Scroll Down</a>
        </div>
    </section>

    <section className='clients_sec'>
        <div className='custom-container'>
            <div className='clients_inner'>
                <div className='ttlWrap'>
                    <span>Clients</span>
                    <h2>Working With the Best</h2>
                </div>
                <div className='clientsLogo'>
                    <img src={mikemafori} alt='MikeMafori' title='MikeMafori' />
                    <img src={dawsonsawyer} alt='DawsonSawyer' title='DawsonSawyer' />
                    <img src={news1130} alt='News1130' title='News1130' />
                    <img src={autoworld} alt='AutoWorld' title='AutoWorld' />
                    <img src={duda} alt='Duda' title='Duda' />
                    <img src={jiffylube} alt='JiffyLube' title='JiffyLube' />
                </div>
            </div>
        </div>
    </section>

    <section className='story_sec'>
        <div className='custom-container'>
            <div className='custom_row'>
                <div className='leftCol'>
                    <div className='ttlWrap'>
                        <span>Our Story</span>
                        <h2>Creating To Inspire</h2>
                    </div>
                </div>
                <div className='rightCol'>
                    <div className='cont'>
                        <p>Since conception in 2016, Signtruck has been actively serving both local & international businesses to help spread their message throughout Vancouver & The Fraser Valley. Singtruck, unlike any other advertising platrform allows US to deliver YOUR message any time, any place!</p>
                    </div>
                </div>
            </div>
            <div className='fullImg_wrap'>
                <img src={trucks} alt='' title='' />
            </div>
        </div>
    </section>

    <section className='connect_us_sec'>
        <div className='custom-container'>
            <div className='custom_row'>
                <div className='imgCol'>
                    <img src={truck} alt='Connect With Us' title='Connect With Us' />
                </div>
                <div className='formCol'>
                    <div className='ttlWrap'>
                        <span>Clients</span>
                        <h2>Connect With Us</h2>
                    </div>
                    <div className='connectForm'>
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
        </div>
    </section>
    </>
  );
}

export default Home;