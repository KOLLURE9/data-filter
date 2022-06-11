import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function SignIn() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='lab1.jpg'
              text='View And Update Reports'
              label='check now'
              path='/view and update reports'
            />
            <CardItem
               src='lab2.jpg'
               text='View Special Scheduling'
               label='check now'
               path='/view special scheduling'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignIn;