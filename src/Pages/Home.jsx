import React, { useContext } from 'react';
import Navbar from '../Shared/navbar';
import Leftside from './leftside';
import Middle from './middle';
import { useLoaderData } from 'react-router-dom';
import Newscard from './Newscard';
import { AuthContex } from '../provider/AuthProvider';

const Home = () => {
const news=useLoaderData();   
    
    return (
        <div>
            <h1 className='text-center text-6xl'>This Is Sports Carnival</h1>
            <br />
            <h1 className='text-center'>The contents  are class faculty and elusive network of sport people and associations. Learners will gain a holistic understanding of the sport event landscape and become confident in their ability to think and converse about sport event management.</h1>
        <Navbar className='text-center' ></Navbar>
        <div className='lg:flex sm:block'>
            <div><Leftside></Leftside></div>
            
            <div>
             {
                news.map(annews=>
                    
                <Newscard  news={annews} ></Newscard>
                )
             }
             </div>
        <div><Middle></Middle></div>
        
        </div>
        
        </div>
    );
};

export default Home;