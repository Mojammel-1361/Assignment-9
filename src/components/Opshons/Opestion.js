import React from 'react';

const Operation = ({option, mcq}) => {
    console.log(option);
    const {correctAnswer}=mcq;

    const click = () =>{
        if(correctAnswer===option){
            alert('OK')
        }
        else{
            alert('NO')
        }
    }

    return (
        <div onClick={click}>
            <h1>{option}</h1>
        </div>
    );
};

export default Operation;