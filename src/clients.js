import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import faqBanner from './assets/images/faq_banner.png';
import mikemarfori from './assets/images/mikemarfori.png';
import dawsonsawyer from './assets/images/dawsonsawyer.png';
import news1130 from './assets/images/news1130.png';
import newslogo from './assets/images/newslogo.png';
import newsTruck from './assets/images/newsTruck.png';
import autoworld from './assets/images/autoworld.png';
import duda from './assets/images/duda.png';
import jiffylube from './assets/images/jiffylube.png';

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
                <Tab><img src={mikemarfori} alt='MikeMarfori' title='MikeMarfori' /></Tab>
                <Tab><img src={dawsonsawyer} alt='DawsonSawyer' title='DawsonSawyer' /></Tab>
                <Tab><img src={news1130} alt='News1130' title='News1130' /></Tab>
                <Tab><img src={autoworld} alt='AutoWorld' title='AutoWorld' /></Tab>
                <Tab><img src={duda} alt='Duda' title='Duda' /></Tab>
                <Tab><img src={jiffylube} alt='JiffyLube' title='JiffyLube' /></Tab>
              </TabList>
              <TabPanel>
                <div className='tabCont_inner'>
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
                <h2>Dawson Sawyer</h2>
              </TabPanel>
              <TabPanel>
                <h2>News 1130</h2>
              </TabPanel>
              <TabPanel>
                <h2>Autoworld</h2>
              </TabPanel>
              <TabPanel>
                <h2>Duda</h2>
              </TabPanel>
              <TabPanel>
                <h2>Jiffylube</h2>
              </TabPanel>
            </Tabs>
          </div>
        </section>
    </>
  );
}

export default Clients;