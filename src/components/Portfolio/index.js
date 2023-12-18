import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from "../../data/portfolio.json"
import RenderPortfolio from './RenderPortfolio.js';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={7} />
                </h1>
                <div>{RenderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default Portfolio;