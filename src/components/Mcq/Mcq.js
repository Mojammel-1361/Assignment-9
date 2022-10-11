import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowMcq from '../ShowMcq/ShowMcq';


const Mcq = () => {
    const data = useLoaderData();
    const mcqs = (data.data.questions);
    
    return (
        <div>
            {
                mcqs.map(mcq => <ShowMcq key={mcq.id} mcq={mcq}></ShowMcq>)
            }
            
        </div>
    );
};

export default Mcq;