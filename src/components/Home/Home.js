import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'
import img from '../Home/favicon.ico'


const Home = () => {
    const api = useLoaderData();
    const quizs = (api.data);
    
    return (
        <div className='home-contender'>
            <div className='img-div'>
                <div><img src={img} alt="" /></div>
            
            <div><h1 className='text-2xl  font-bold text-sky-500 '>Well come to Quiz Club.com</h1></div>
            </div>
            
            <div className='titel'>
            
                <p className='text-sky-600 mt-2 p-3'>The most popular quiz competition site in bangladesh. We are now going to discuss the upcoming quiz competition.<br></br> So if you want to participate in any kind of quiz competition on education? However, you can find out about this from here.</p>
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