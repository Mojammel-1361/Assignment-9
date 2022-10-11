import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Operation from '../Opshons/Opestion';
import './ShowMcq.css'
import {  faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowMcq = ({mcq}) => {

    
    
    const {name, question, options, correctAnswer} = mcq;
    
    
    const notify = () => toast.warn(correctAnswer);
    return (
        <div>
                <h1>{name}</h1>
            <div className='mcq'>
                <div className='text-2xl sm:text-md'>
                    <h1>{question}</h1>
                    <FontAwesomeIcon
                    onClick={notify}    
                    icon={faEye}
                
                    ></FontAwesomeIcon>
                    <ToastContainer></ToastContainer>
                </div>
                <div className='option'>
                    {
                        
                        options.map(option => <Operation
                        option={option}
                        mcq={mcq}
                        ></Operation>
                        )
                        
                    }
                </div>
                
                    <p className='ans'>correctAnswer: {correctAnswer}</p>
                
            </div>
            
        </div>
    );
};

export default ShowMcq;