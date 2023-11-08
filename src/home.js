import React from 'react';
import jiffylube from './assets/images/jiffylube.png';
import duda from './assets/images/duda.png';
import autoworld from './assets/images/autoworld.png';
import news1130 from './assets/images/news1130.png';
import dawsonsawyer from './assets/images/dawsonsawyer.png';
import trucks from './assets/images/storyTruck.png';
import truck from './assets/images/truck.png';
import heroBanner from './assets/images/banner.png';
import subsTruck from './assets/images/subsTruck.png';

const Home = () => {
  return (
    <>
    <section className='hero_sec' style={{backgroundImage: `url(${heroBanner})`}}>
        <div className='hero_overlay'></div>
        <div className='custom-container'>
            <div className='hero_inner'>
                <div className='hero_info'>
                    <span>A No-Limits Creative Agency</span>
                    <h2>Propel Your Brand With SignTruck</h2>
                    <p>Drive Your Brand Forward with Dynamic Sign Truck Advertising!</p>
                    <a href='#' title='Contact Us' className='butn butn_success'><span>Contact Us</span></a>
                </div>
            </div>
        </div>
        <div className='scrollDown'>
            <a href='#clients_sec' title='Scroll Down'><span>&#8592;</span>Scroll Down</a>
        </div>
    </section>

    <section className='clients_sec' id='clients_sec'>
        <div className='custom-container'>
            <div className='clients_inner'>
                <div className='ttlWrap'>
                    <span>Clients</span>
                    <h2>Working With the Best</h2>
                </div>
                <div className='clientsLogo'>
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
                        <p>Since conception in 2016, Signtruck has been actively serving both local & international businesses to help spread their message throughout Vancouver & The Fraser Valley. Signtruck, unlike any other advertising platform allows us to deliver your message any time, any place!</p>
                    </div>
                </div>
            </div>
            <div className='fullImg_wrap'>
                <img src={trucks} alt='' title='' />
            </div>
        </div>
    </section>

    {/* <section className='connect_us_sec'>
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
    </section> */}

    <section className='map_sec'>
        <div className='map_inner'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41723.94618736955!2d-122.79645471884146!3d49.186394172977046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5481e291ec24f2bf%3A0xb3e10018a53e7fab!2sBC-1%2C%20British%20Columbia%2C%20Canada!5e0!3m2!1sen!2sin!4v1698924299929!5m2!1sen!2sin" width="1000" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section className='subscribe_sec'>
        <div className='custom-container'>
            <div className='subs_inner'>
                <div className='custom_row'>
                    <div className='imgCol'>
                        <img src={subsTruck} alt='SignTruck' title='SignTruck' />
                    </div>
                    <div className='subsForm'>
                        <div className='ttlWrap'>
                            <h2>Subscribe Form</h2>
                        </div>
                        <form action='' className='inlineForm'>
                            <div className='formGrp'>
                                <input type='email' id='email' placeholder='Enter Your Email' />
                                <input type='submit' value='Submit' className='butn butn_success' />
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