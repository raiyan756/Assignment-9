import React from 'react';
import { useParams } from 'react-router-dom';

const Sports_info = () => {
    const{id,title}=useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default Sports_info;