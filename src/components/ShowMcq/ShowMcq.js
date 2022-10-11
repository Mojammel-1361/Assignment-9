import React from 'react';
import './ShowMcq.css'


const ShowMcq = ({mcq}) => {
    const { question, options, } = mcq
   
    return (
        <div>
            <div className='mcq'>
                <div className='text-xl'>{question}</div>
                <div>
                    {
                        options.map(option => <div>
                            <label class="label cursor-pointer">
                        <span class="label-text">{option}</span> 
                        <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
                      </label>
                        </div>
                        )
                        
                    }
                </div>
                
                    
                
            </div>
            
           
        </div>
    );
};

export default ShowMcq;