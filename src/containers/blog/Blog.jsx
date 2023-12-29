import React from 'react'
import './blog.css'
import {Article} from '../../components'
import { blog01,blog02,blog03,blog04,blog05 } from './imports'

function Blog() {
  return (
    <div className='gpt-blog section-padding' id='blog'>
      <div className='gpt-blog-heading'>
        <h1 className="gradient-text">A lot is happening. We ar bloging about it</h1>

      </div>
      <div className="gpt-blog-container">
        <div className="gpt-blog-container-groupa">
          <Article imgUrl={blog01} date="dec 13, 2023" title="GPT-3 and OPEN AI is the future and let explore how it is"/>

        </div>
        <div className="gpt-blog-container-groupb">
          <Article imgUrl={blog02} date="dec 13, 2023" title="GPT-3 and OPEN AI is the future and let explore how it is"/> 
          <Article imgUrl={blog03} date="dec 13, 2023" title="GPT-3 and OPEN AI is the future and let explore how it is"/>
          <Article imgUrl={blog04} date="dec 13, 2023" title="GPT-3 and OPEN AI is the future and let explore how it is"/>
          <Article imgUrl={blog05} date="dec 13, 2023" title="GPT-3 and OPEN AI is the future and let explore how it is"/>


          
        </div>

      </div>
    </div>
  )
}

export default Blog