import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name, logo} = quiz
    
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h1 className='text-lg'>{name}</h1>
            <button class="btn btn-outline btn-secondary btn-sm">Start</button>
        </div>
    );
};

export default Quiz;