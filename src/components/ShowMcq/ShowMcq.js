import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Operation from '../Opshons/Opestion';
import './ShowMcq.css'
import {  faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowMcq = ({mcq}) => {

    
    
    const {name, question, options, correctAnswer} = mcq;
    
    
    const notify = () => toast.warn(correctAnswer, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    return (
        <div>
                <h1>{name}</h1>
            <div className='mcq'>
                <div className='text-2xl sm:text-md question'>
                    <div><h1>{question}-</h1>  </div>

                    <div>
                    <FontAwesomeIcon
                    onClick={notify}    
                    icon={faEye}
                    ></FontAwesomeIcon>
                    </div>
                    <ToastContainer/>
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
                
                    
                
            </div>
            
        </div>
    );
};

export default ShowMcq;