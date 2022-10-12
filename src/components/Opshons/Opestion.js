import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Opestion.css'
const Operation = ({option, mcq}) => {
    const {correctAnswer}=mcq;

    const click = () =>{
        if(correctAnswer===option){
            toast.success('correct Answer, good job', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });;
        }
        else{
            toast.error('wring Answer, try again', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        <ToastContainer/>
    }

    return (
        <div onClick={click}  className='ops'>
            
            <input type='radio' name='fav_language'></input>
            
            <label> {option}</label>
            
        </div>
    );
};

export default Operation;