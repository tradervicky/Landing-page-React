import React, { useState } from 'react'
import './Faq.css'
import {data} from './Data';
import './Faq.css';
import MyFaq from './MyFaq';

function Faq() {
  const [faq, setFaq] = useState(data);
  return (
    <div className='FAQ-complete'>
        <div className='FAQ-img'>
            <img src="/media/FAQ.svg" alt="faq" />
        </div>
        <div className="Faq-que">
          <h4>FAQs</h4>
          <h1>Do you have <span>Questions ?</span></h1>
          <p className='Faq-quep'>Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.</p>
          {
            data.map((currEle)=>{
              const { id, } = currEle;
              return <MyFaq key={id} {...currEle}/>
            })
          }
        </div>
    </div>
  )
}

export default Faq