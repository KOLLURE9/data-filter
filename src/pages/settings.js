import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Setting() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='online.png'
              text='Online Appoinment'
              label='view now'
              path='/online appoinment'
            />
            <CardItem
               src='physical.png'
               text='Physical Appoinment'
               label='view now'
               path='/physical appoinment'
            />
          
            <CardItem
               src='appo.png'
               text='Make An Appoinment'
               label='add now'
               path='/make an appoinment'
            />
            <CardItem
               src='medical.png'
               text='View Medical Report Request'
               label='view now'
               path='/view medical report request'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Setting;