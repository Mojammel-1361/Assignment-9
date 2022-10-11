
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Questions from './components/Questions/Questions';
import Chart from './components/Chart/Chart';
import Mcq from './components/Mcq/Mcq';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
          
        },
        {
          path: '/questions',
          element: <Questions></Questions>
        },
        {
          path: '/chart',
          element: <Chart></Chart>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) =>{
            // console.log(params.quizId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Mcq></Mcq>
        }
      ]
      
    },
    {
      path: '*',
      element: <div>some thing is wring is 404 place cha this</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
      
    </div>
  );
}

export default App;
