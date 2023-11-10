import React, { useState } from 'react';
import faqBanner from './assets/images/faq_banner.png';
import accImg from './assets/images/acc_img.png';
import quesIc from './assets/images/ques_ic.png';
import AccordionItem from '../src/ui/accordion';

const Faq = () => {

  const faqs = [
    {
      id: 1,
      icon: `${quesIc}`,
      header: "What area does Signtruck service?",
      text: "We have multiple trucks available, each with 7-9 separate ad spaces available.",
      image_src: `${accImg}`
    },
    {
      id: 2,
      icon: `${quesIc}`,
      header: "How many ads are available on your truck(s) ?",
      text: "We have multiple trucks available, each with 7-9 separate ad spaces available. The Tri-Vision panels on the truck rotate on a timer allowing up to 3 separate billboards, on each side of the truck. Availabiltiy will vary depending on the contracts in place, feel free to check in with us for current availabilities.",
      image_src: `${accImg}`
    },
    {
      id: 3,
      icon: `${quesIc}`,
      header: "How many hours will the truck be on the road?",
      text: " Availabiltiy will vary depending on the contracts in place, feel free to check in with us for current availabilities.",
      image_src: `${accImg}`
    }
  ]

  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
        setActive(null);
    } else {
        setActive(index);
    }
  }
  return (
    <>
        <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
          <div className='custom-container'>
            <h1>Frequently Asked Questions</h1>
          </div>
        </section>
        <section className='faqSec'>
          <div className='custom-container'>
            <div className='accordion_main'>
              {faqs.map((item, index) => {
                  return (
                      <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={item} />
                    )
                })
              }
            </div>
          </div>
        </section>
    </>
  );
}

export default Faq;