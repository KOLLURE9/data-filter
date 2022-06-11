import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Cards(){
    
    return (
        <div className='cards'>
          
          <div className='cards__container'>
            <div className='cards__wrapper'>
              
              <ul className='cards__items'>
                <CardItem
                  src='all appoinment.png'
                  text='All Appoinment '
                  label='check appoinment'
                  path='/all appoinment'
                />
                <CardItem
                  src='book appoinment.png'
                  text='Make An Appoinment '
                  label='book now'
                  path='/make an appoinment'
                />
                <CardItem
                  src='report.png'
                  text='View Medical Report Request '
                  label='view now'
                  path='/view medical report request'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}
    export default Cards;