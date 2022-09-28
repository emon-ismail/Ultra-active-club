import React, { useEffect, useState } from 'react';
import './Club.css'

const Club = () => {
    const [instruments,setInstrument]=useState([])
    useEffect(()=>{
        fetch('emon.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setInstrument(data);
        })
    }, [])
    return (
        <div className='d-flex bd-highlight '>
        <div className="p-2 w-100 bd-highlight m-5">
             <div className=''><h2>Emon's Gym Center</h2>
             <h5 className='ms-5' >Choose today's done</h5></div>
             {
                // instruments.map(instument=><Item 
                //     key={product.id}
                //     instrument={instrument}
                //     handleAddToCArd ={handleAddToCArd}
                // ></Item>)
             }
        </div>
        <div className='p-2 flex-shrink-1 bd-highlight m-5'>
            {/* <Cart cart={cart}></Cart> */}
            <h1>Emon</h1>
             <h2>total : </h2>
             
        </div>
        
    </div>
    );
};

export default Club;