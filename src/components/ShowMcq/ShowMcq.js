import React from 'react';
import './ShowMcq.css'
const ShowMcq = ({mcq}) => {
    const { question, options} = mcq
   
    return (
        <div>
            <div className='mcq'>
                <div>{question}</div>
                <input type="radio"></input>{options}
                    
                
            </div>
            
           
        </div>
    );
};

export default ShowMcq;