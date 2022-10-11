import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz
    
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h1 className='text-lg'>Quiz topic: {name}</h1>
            <h1 className='text-sm'>Total Question : {total}</h1>
            <button class="btn btn-outline btn-secondary btn-sm">Start</button>
        </div>
    );
};

export default Quiz;