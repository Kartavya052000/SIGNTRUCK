import React from 'react'
import jiffylube from './assets/images/jiffylube.png'
import duda from './assets/images/duda.png'
import autoworld from './assets/images/autoworld.png'
import news1130 from './assets/images/news1130.png'
import dawsonsawyer from './assets/images/dawsonsawyer.png'
import trucks from './assets/images/storyTruck.png'
// import truck from './assets/images/truck.png';
import heroBanner from './assets/images/banner.png'
import Marquee from 'react-fast-marquee'
import subsTruck from './assets/images/subsTruck.png'

const Home = () => {
  return (
    <>
      <section className='hero_sec' style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className='hero_overlay'></div>
        <div className='custom-container'>
          <div className='hero_inner'>
            <div className='hero_info'>
              <span>A No-Limits Creative Agency</span>
              <h2>Propel Your Brand With SignTruck</h2>
              <p>
                Signtruck is a dedicated mobile billboard advertising agency. Our specialised trucks are built solely to showcase rotating billboards,
                displaying up to three different ads per side.
              </p>
              <p>
                We don’t move goods, we move your message, bringing it to life on the streets with our innovative advertising technology. With
                innovative ad technology, we offer three messages in one, boosting your exposure and impact.
              </p>
              <p>Let Signtruck drive your brand forward—anywhere, anytime!</p>
              <a href='/contact' title='Contact Us' className='butn butn_success'>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className='scrollDown'>
          <a href='#clients_sec' title='Scroll Down'>
            <span>&#8592;</span>Scroll Down
          </a>
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

      <section className='service_sec'>
        <div className='custom-container'>
          <div className='custom_row justify-content-center'>
            <div className='ttlWrap text-center mb-3'>
              <span>Service</span>
              <h2>What We Offer</h2>
            </div>
          </div>
          <div className='custom_row'>
            <div className='col-12 col-md-6 mb-3'>
              <div className='col-11 mx-auto border rounded p-4 border-primary'>
                <div className='service-icon rounded'>
                  <i class='bi bi-truck'></i>
                </div>
                <h4 className='my-3'>Mobile Billboard Advertising</h4>
                <ul className='text-muted'>
                  <li>9 rotating billboards (3 per side) for maximum exposure.</li>
                  <li>Dynamic, eye-catching signs grab attention.</li>
                  <li>Ideal for high-traffic area visibility.</li>
                  <li>With Signtruck, your brand gets noticed wherever the road takes it.</li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='col-11 mx-auto border rounded p-4 border-primary'>
                <div className='service-icon rounded'>
                  <i class='bi bi-graph-up'></i>
                </div>
                <h4 className='my-3'>Brand Collaboration</h4>
                <ul className='text-muted'>
                  <li>Collaborate with brands to amplify reach.</li>
                  <li>Craft strategic campaigns for visibility.</li>
                  <li>Ensure lasting impressions on the audience.</li>
                  <li>Deliver standout and successful campaigns.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='features_sec'>
        <div className='custom-container'>
          <div className='custom_row justify-content-center'>
            <div className='ttlWrap mb-3 text-center'>
              <span>Features</span>
              <h2>Our main features</h2>
            </div>
          </div>
          <div className='custom_row gap-3 gap-md-5 justify-content-center'>
            {[
              {
                icon: 'bi bi-geo-alt',
                title: 'GPS tracking',
                color: '#2f6bf3',
              },
              {
                icon: 'bi bi-signpost-split',
                title: 'Custom Route',
                color: '#d954cf',
              },
              {
                icon: 'bi bi-triangle-fill',
                title: 'Multiple Signages',
                color: '#43a779',
              },
              {
                icon: 'bi bi-eye',
                title: 'Mobile exposure',
                color: '#e55d5d',
              },
              {
                icon: 'bi bi-people',
                title: 'Brand Collaboration',
                color: '#2f6bf3',
              },
              {
                icon: 'bi bi-bar-chart-line',
                title: 'High Impact',
                color: '#d954cf',
              },
            ].map(({ icon, title, color }, index) => {
              return (
                <div className='col-6 col-md-3 col-lg-3' key={index}>
                  <div className='rounded border text-center featureCard p-3'>
                    <div className='featureIcon mx-auto mb-3' style={{ backgroundColor: color + '40' }}>
                      <i class={icon} style={{ color }}></i>
                    </div>
                    <p>{title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='testimonials_sec'>
        <div className='custom-container'>
          <div className='custom_row justify-content-center'>
            <div className='ttlWrap mb-3 text-center'>
              <span>Testimonials</span>
              <h2>What our customers says</h2>
            </div>
          </div>
          <div className='custom_row'>
            <Marquee play autoFill speed={20} pauseOnHover className='marqueeContainer'>
              {[
                {
                  words: `Signtruck has been a game-changer for our brand awareness! Their rotating billboards made our message impossible to miss, and
                        the mobile advertising format allowed us to reach more people in key areas. We've seen a significant boost in brand visibility
                        thanks to Signtruck's unique approach!`,
                  name: 'Jane Thompson',
                  role: 'Brand Manager',
                },
                {
                  words: `Working with Signtruck gave us maximum reach and focus for our campaign. Their mobile billboards ensured our ads were always in the right place at the right time. The ability to strategically target high-traffic areas allowed us to engage our audience like never before.`,
                  name: 'Michael Davis',
                  role: 'CEO',
                },
                {
                  words: `Signtruck took our advertising visibility to the next level. Their rotating billboards are attention-grabbing, and the trucks allowed us to cover a wide area, increasing our reach significantly. Our ads didn’t just stay in one spot—they travelled and reached thousands more eyes than traditional billboards could.`,
                  name: 'Sarah Lee',
                  role: 'Marketing Manager',
                },
                {
                  words: `As a small business owner, finding a cost-effective advertising solution was essential. Signtruck provided just that, offering the benefit of multiple billboard placements on a single truck. Their mobile service gave us fantastic exposure without the high costs of static ads, making it an affordable way to grow our business.`,
                  name: 'Greg Miller',
                  role: 'Business Owner',
                },
                {
                  words: `Signtruck’s mobile billboards were the perfect way to get my real estate listings in front of potential buyers. The flexibility of the trucks moving through high-traffic areas was a huge advantage, allowing me to showcase properties across multiple neighbourhoods in a single day. It’s a unique and highly effective way to advertise!`,
                  name: 'Emma Rodriguez',
                  role: 'Real Estate Agent',
                },
              ].map(({ words, name, role }, index) => {
                return (
                  <div className='rounded text-center testimonialCard p-3' key={index}>
                    <div className='p-3'>
                      <p className='words'>{words}</p>
                      <p className='name'>{name}</p>
                      <p className='role m-0'>{role}</p>
                    </div>
                  </div>
                )
              })}
            </Marquee>
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
                <p>
                  Since the creation in 2016, Signtruck has been actively serving both local and international businesses to help spread their message
                  throughout the Lower Mainland. Signtruck, unlike any other advertising platform allows us to deliver your message any time, any
                  place!
                </p>
              </div>
            </div>
          </div>
          <div className='fullImg_wrap'>
            <img src={trucks} alt='' title='' />
          </div>
        </div>
      </section>

      {/* <section className='iframe_sec'>
        <div className='iframe_inner'>
          <iframe src='http://www.canadianvisionmedia.ca/jiffylube/' scrolling='no'></iframe>
        </div>
      </section> */}

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
                    <input type='text' placeholder='Enter Your Name' id='name' />
                  </div>
                  <div className='formGrp'>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='Enter Your Email' id='email' />
                  </div>
                  <div className='formGrp'>
                    <label for='subject'>Subject</label>
                    <input type='text' placeholder='Type The Subject' id='subject' />
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

      <section className='subscribe_sec'>
        <div className='custom-container'>
          <div className='subs_inner'>
            <div className='custom_row'>
              <div className='imgCol'>
                <img src={subsTruck} alt='SignTruck' title='SignTruck' />
              </div>
              <div className='subsForm'>
                <div className='ttlWrap mb-4'>
                  <h2>Stay Updated</h2>
                  <p className='text-light text-lowercase'>Just tell us your email address, and the rest is happiness</p>
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

      <section className='map_sec'>
        <div className='map_inner'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41768.242493675614!2d-122.89728314450593!3d49.1338426707643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dbd3a3688629%3A0x539003dfc67e24b3!2sWashworld!5e0!3m2!1sen!2sin!4v1732375607782!5m2!1sen!2sin'
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </section>
    </>
  )
}

export default Home
