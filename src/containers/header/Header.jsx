import React from 'react'
import './header.css'
import people from '../../assests/people.png'
import ai from '../../assests/possibility.png'

function Header() {
  return (
    <div className='gpt-header section-padding' id='home'>
        
      <div className='gpt-header-content'>
        <h1 className='gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt-header-content-input'>
          
          <input type="email" placeholder='Your Email' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt-header-content-people">
          <img src={people} alt="" />
        </div>
        
        
      </div>
      <div className="gpt-header-image">
        <img src={ai} alt="" />
      </div>
      

    </div>
  )
}

export default Header