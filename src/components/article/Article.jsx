import React from 'react'
import './article.css'

function Article({imgUrl,date,title}) {
  return (
    <div className='gpt-blog-container-article' >
      <div className='gpt-blog-container-article-image'>
        <img src={imgUrl} alt="Blog Image" />

      </div>
      <div className="gpt-blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>read full articles</p>
        </div>

      </div>

    </div>
  )
}

export default Article