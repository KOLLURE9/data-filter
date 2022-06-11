import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function SignUp() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='lab3.jpg'
              text='Patients Reports'
              label='check now'
              path='/reports'
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

export default SignUp;