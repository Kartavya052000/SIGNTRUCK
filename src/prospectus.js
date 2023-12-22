import React from 'react';
import faqBanner from './assets/images/faq_banner.png';
import dawsonsawyer from './assets/images/dawsonsawyer.png';
import news1130 from './assets/images/news1130.png';
import newslogo from './assets/images/newslogo.png';
import newsTruck from './assets/images/newsTruck.png';
import autoworld from './assets/images/autoworld.png';
import duda from './assets/images/duda.png';
import jiffylube from './assets/images/jiffylube.png';
import jifflubetruck from './assets/images/jiffylubetruck.png';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Prospectus = () => {
  const handleTabClick = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab/window
  };
  return (
    <>
        <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
          <div className='custom-container'>
            <h1>Prospectus</h1>
          </div>
        </section>
        <section className='clientsTab_sec'>
          <div className='custom-container'>
            <Tabs>
              <TabList>
                <Tab onClick={() => handleTabClick('http://www.canadianvisionmedia.ca/')}><img src={news1130} alt='News1130' title='News1130' href=""/></Tab>
                <Tab onClick={() => handleTabClick('http://www.canadianvisionmedia.ca/')}><img src={dawsonsawyer} alt='DawsonSawyer' title='DawsonSawyer' /></Tab>
                <Tab onClick={() => handleTabClick('http://www.canadianvisionmedia.ca/')}><img src={autoworld} alt='AutoWorld' title='AutoWorld' /></Tab>
                <Tab onClick={() => handleTabClick('http://www.canadianvisionmedia.ca/')}><img src={duda} alt='Duda' title='Duda' /></Tab>
                <Tab onClick={() => handleTabClick('http://www.canadianvisionmedia.ca/')}><img src={jiffylube} alt='JiffyLube' title='JiffyLube' /></Tab>
              </TabList>

              </Tabs>
              </div>
              </section>
        {/* <section className='iframe_sec'>
            <div className='iframe_inner'>
                <iframe src='http://www.canadianvisionmedia.ca/'></iframe>
            </div>
        </section> */}
    </>
  );
}

export default Prospectus;