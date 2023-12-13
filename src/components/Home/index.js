import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                    <span className={`${letterClass} _14`}> </span> 
                    <AnimatedLetters letterClass={letterClass} strArray={"Johnathan Luong".split("")} idx={15}/>
                </h1>
                <h2>Computer Science at University of Central Florida</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
        <Loader type='cube-transition' />
        </>
    )
}

export default Home