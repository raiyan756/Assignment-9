import React from 'react';
import { Link } from 'react-router-dom';

const Newscard = ({news}) => {
    const {name,id}=news;
    console.log(name);
    return (
        <div>
            
            
            <p> <Link to={`/news/${id}`} >{name}</Link> </p>
        </div>
    );
};

export default Newscard;