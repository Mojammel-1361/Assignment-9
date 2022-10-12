import React from 'react';
import { useLoaderData } from 'react-router-dom';



import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {
// const data = [
//         {
//         id: 1,
//         name: "React",
//         total: 8,
//         },
//         {
//         id: 2,
//         name: "JavaScript",
//         total: 9,
//         },
//         {
//         id: 4,
//         name: "CSS",
//         total: 8,
//         },
//         {
//         id: 5,
//         name: "Git",
//         total: 11,
//         },
//         ];
    const {data} = useLoaderData();
    
    return (
        
        <div className='mt-2 chart'>
            <LineChart width={600} height={500} data={data} >
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
            </LineChart>
            
        </div>
    );
};

export default Chart;