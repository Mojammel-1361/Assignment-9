import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Operation = ({option, mcq}) => {
    const {correctAnswer}=mcq;

    const click = () =>{
        if(correctAnswer===option){
            toast.success(' wow correct Answer', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });;
        }
        else{
            toast.error('wring Answer', {
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
        <div onClick={click} >
            
            <input type='radio' name='fav_language'></input>
            
            <label >{option}</label><br></br>
            
        </div>
    );
};

export default Operation;