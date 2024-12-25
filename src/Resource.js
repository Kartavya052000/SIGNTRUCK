import React from 'react'
import Faq from './faq'
import Clients from './clients'
import Contact from './contact'
import faqBanner from './assets/images/faq_banner.png'

export default function Resource() {
  return (
    <>
      <section className='innerSec' style={{ backgroundImage: `url(${faqBanner})` }}>
        <div className='custom-container'>
          <h1>Resources</h1>
        </div>
      </section>
      <Contact />
      <Faq />
      <Clients />
    </>
  )
}
