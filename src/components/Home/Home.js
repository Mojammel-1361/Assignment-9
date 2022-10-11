import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'


const Home = () => {
    const api = useLoaderData();
    
    const quizs = (api.data);
    
    return (
        <div className='home-contender'>
            <div className='titel'>
                <h1 className='text-5xl font-bold text-sky-500'>Well come to Quiz Club.com</h1>
                <p className='text-sky-600 mt-2 p-9'>The most popular quiz competition site in bangladesh. We are now going to discuss the upcoming quiz competition.<br></br> So if you want to participate in any kind of quiz competition on education? However, you can find out about this from here.</p>
            </div>
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