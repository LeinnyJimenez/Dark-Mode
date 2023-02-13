import React from 'react'
import moment from 'moment'
const Article = ({ title, snnipet, date, length }) => {

  console.log(date);
  return <article className='post'>
    <h2>
      {title}
    </h2>
    <div className='post-info'>
      <span>date</span>
      <span>{length} min read</span>
    </div>
    <p>{snnipet}</p>
  </article>
}

export default Article
