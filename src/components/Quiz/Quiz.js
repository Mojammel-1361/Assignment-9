import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz
    
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h1 className='text-lg'>Quiz topic: {name}</h1>
            <h1 className='text-sm'>Total Question : {total}</h1>
            <p class="btn btn-sm btn-outline btn-primary" > <Link to={`/quiz/${id}`}>Start</Link> </p>
        </div>
    );
};

export default Quiz;