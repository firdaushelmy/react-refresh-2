import React from 'react';
import Avatar from './Avatar';

function Card(props) {
  return (
    <div className='card'>
      <div className='top'>
        <h2 className='name'>{props.name}</h2>
        <Avatar img={props.img} alt={props.alt} />
      </div>
      <div className='bottom'>
        <p className='info'>{props.phoneNumber}</p>
        <p className='info'>{props.email}</p>
      </div>
    </div>
  )
}

export default Card;