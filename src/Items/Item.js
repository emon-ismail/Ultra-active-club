import React from 'react';
import './Item.css'

const Item = (props) => {
    
    const {name,picture,age,time} = props.instrument;
     
    return (
        <div className='item'>
        <img src={picture} alt="" />
        <div className='item-info'>
        <h2>{name}</h2>
        <p>For Age : {age}</p>
        <p>Time required : {time}s</p>
        <div>
        <button onClick={()=>props.handleAddToCArd(props.instrument)}  className='button'>
          <p >Add to Card</p>
        
          </button>
        </div>
        </div>
       
      </div>
      
       
    );
};

export default Item;