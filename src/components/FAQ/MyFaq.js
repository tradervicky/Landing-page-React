import React, { useState } from 'react'
import './Faq.css'
function MyFaq({que,ans}) {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
  return (
    <div className='Faq-que-ans'>  
        <div className='faq-que-heading'>
        <h3 onClick={()=> setShow(!show)}>{que}</h3>
        <p onClick={()=> setShow(!show)}>{show ? <img src="./media/minus2.svg" alt="" /> : <img src="./media/plus.svg" alt="" />}</p>
        </div>
       {
       show  && <p className='answers'>{ans}</p> }
    
    </div>

  )
}

export default MyFaq