import React from 'react'
import '../styles/Details.css';

const Details = ({person}) => {
  
  return (
    <div className="details-container">
      <h1>{person.name}</h1>
      <a className='phone' href={`tel:${person.phone[0].value}`}>{person.phone[0].value}</a>
      <div className='delimiter'> </div>
      <div className='box'>
        <div className='title'>
          <h3>Email</h3>
          <h3>Organization</h3>
        </div>
        <div >
          <h4 className='info'>{person.email[0].value}</h4>
          <h4 className='org-info'>{person.org_name}</h4>
        </div>
      </div>
    </div>
  )
}

export default Details