import React from 'react';
import { useLoaderData } from 'react-router-dom';



import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = () => {

    const {data} = useLoaderData();
    
    return (
        
        <div className='m-5'>
            <div>
            <LineChart width={600} height={400} data={data} >
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
            </LineChart>
            
        </div>
        </div>
    );
};

export default Chart;