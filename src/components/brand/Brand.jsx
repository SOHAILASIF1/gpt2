import React from 'react'
import './brand.css'
import { google,atlessian,slack,shopify,dropbox } from './imports'

function Brand() {
  return (
    <div className='gpt-brand section-padding'>
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={atlessian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>

    </div>
  )
}

export default Brand