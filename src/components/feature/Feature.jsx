import React from 'react'
import './feature.css'

function Feature({title,text}) {
  return (
    <div className='gpt-feature-container-feature'>
      <div className="gpt-feature-container-feature-title">
        <div/>
        <h1>{title}</h1>
      </div>
      <div className="gpt-feature-container-feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature