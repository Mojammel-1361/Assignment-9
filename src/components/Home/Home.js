import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'


const Home = () => {
    const api = useLoaderData();
    
    const quizs = (api.data);
    
    return (
        <div className='home-contender'>
            <div className='quiz-container'>
            {
                quizs.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
            </div>
        </div>

    );
};

export default Home;