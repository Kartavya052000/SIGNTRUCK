import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import faqBanner from './assets/images/faq_banner.png';
import dawsonsawyer from './assets/images/dawsonsawyer.png';
import news1130 from './assets/images/news1130.png';
import newslogo from './assets/images/newslogo.png';
import newsTruck from './assets/images/newsTruck.png';
import autoworld from './assets/images/autoworld.png';
import duda from './assets/images/duda.png';
import jiffylube from './assets/images/jiffylube.png';
import jifflubetruck from './assets/images/jiffylubetruck.png';
import dawsontruck from './assets/images/dawsontruck.png';
import RotatingBillboard from './RotatingBillboard';
import truckimg from "./images/billboard.jpeg"
import truckimg1 from "./images/coffee.png"
import truckimg2 from "./images/cocktail.png"
import truckimg3 from "./images/shotglass.png"

  const config = {
    background: truckimg,
    images: [
      truckimg1,truckimg2,truckimg3
    ],
    divisions: 41,
    lag: 4,
    duration: 8,
    topLeft: [0.24811844589687727, 0.384359897172236],
    botRight: [0.605277566539924, 0.639277566539924],
};
const Clients = () => {
  return (
    <>
      <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
          <div className='custom-container'>
            <h1>Working With the Best Clients</h1>
          </div>
        </section>

        <section className='clientsTab_sec'>
          <div className='custom-container'>
            <Tabs>
              <TabList>
                <Tab><img src={news1130} alt='News1130' title='News1130' /></Tab>
                <Tab><img src={dawsonsawyer} alt='DawsonSawyer' title='DawsonSawyer' /></Tab>
                <Tab><img src={autoworld} alt='AutoWorld' title='AutoWorld' /></Tab>
                <Tab><img src={duda} alt='Duda' title='Duda' /></Tab>
                <Tab><img src={jiffylube} alt='JiffyLube' title='JiffyLube' /></Tab>
              </TabList>
              <TabPanel>
                <div className='tabCont_inner'>
                <RotatingBillboard config={config} />
                  <div className='custom_row'>
                    <div className='imgColmn'>
                      <Tabs>
                        <TabPanel>
                          <img src={newsTruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={newsTruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={newsTruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={newsTruck} alt='' title='' />
                        </TabPanel>
                        <TabList>
                          <Tab><img src={newsTruck} alt='' title='' /></Tab>
                          <Tab><img src={newsTruck} alt='' title='' /></Tab>
                          <Tab><img src={newsTruck} alt='' title='' /></Tab>
                          <Tab><img src={newsTruck} alt='' title='' /></Tab>
                        </TabList>
                      </Tabs>
                    </div>
                    <div className='contColmn'>
                      <div className='logo'>
                        <img src={newslogo} alt='News1130' title='News1130' />
                      </div>
                      <h4>News1130</h4>
                      <div className='tag'>Industry: <span>Radio Station</span></div>
                      <p>As a loyal customer of News1130 we were excited to get them on board so we could help share our excitement for their station.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className='tabCont_inner'>
                  <div className='custom_row'>
                    <div className='imgColmn'>
                      <Tabs>
                        <TabPanel>
                          <img src={dawsontruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={dawsontruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={dawsontruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={jifflubetruck} alt='' title='' />
                        </TabPanel>
                        <TabList>
                          <Tab><img src={dawsontruck} alt='' title='' /></Tab>
                          <Tab><img src={dawsontruck} alt='' title='' /></Tab>
                          <Tab><img src={dawsontruck} alt='' title='' /></Tab>
                          <Tab><img src={dawsontruck} alt='' title='' /></Tab>
                        </TabList>
                      </Tabs>
                    </div>
                    <div className='contColmn'>
                      <div className='logo'>
                        <img src={jiffylube} alt='News1130' title='News1130' />
                      </div>
                      <h4>Dawson + Sawyer</h4>
                      <div className='tag'>Industry: <span>Building Developer</span></div>
                      <p>When in the Fraser Valley it's hard to miss the presence of Dawson + Sawyer with all of their new developments. We like to think we were part of that!</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Autoworld</h2>
                <p>No Data Right now</p>
              </TabPanel>
              <TabPanel>
                <h2>Duda</h2>
                <p>No Data Right now</p>

              </TabPanel>
              <TabPanel>
              <div className='tabCont_inner'>
                  <div className='custom_row'>
                    <div className='imgColmn'>
                      <Tabs>
                        <TabPanel>
                          <img src={jifflubetruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={jifflubetruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={jifflubetruck} alt='' title='' />
                        </TabPanel>
                        <TabPanel>
                          <img src={jifflubetruck} alt='' title='' />
                        </TabPanel>
                        <TabList>
                          <Tab><img src={jifflubetruck} alt='' title='' /></Tab>
                          <Tab><img src={jifflubetruck} alt='' title='' /></Tab>
                          <Tab><img src={jifflubetruck} alt='' title='' /></Tab>
                          <Tab><img src={jifflubetruck} alt='' title='' /></Tab>
                        </TabList>
                      </Tabs>
                    </div>
                    <div className='contColmn'>
                      <div className='logo'>
                        <img src={jiffylube} alt='News1130' title='News1130' />
                      </div>
                      <h4>jiffy lube</h4>
                      <div className='tag'>Industry: <span>Automotive</span></div>
                      <p>In a competitive market segment like Quick Lubes we have helped Jiffylube stand out from the crowd by spreading their brand & messages to local Surrey / Fraser Valley neighborhoods.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </section>
    </>
  );
}

export default Clients;