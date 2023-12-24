import { useEffect, useRef, useState } from 'react';
import './HomeSlideshow.scss';
import portfolioData from '../../data/portfolio.json';
import { Link } from 'react-router-dom';

const HomeSlideshow = () => {    
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const portfolio = Object.values(portfolioData.portfolio);
    const urlLast = window.location.href[window.location.href.length - 1];


    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
                () => (setIndex((prevIndex) => (
                    prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1
                ),
            )
        ), 4000);

        return () => {
            resetTimeout();
        };
    }, [index, portfolio.length]);

    return (
        <div className='home-slideshow'>
            <div className='slideshowImages' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    portfolio.map((portfolio, idx) => {
                        return(
                            <div className='slide' key={idx}>
                                <Link to={`/portfolio/${portfolio.portLink}/`}>
                                    <img className='slideImage' src={`${urlLast === '/' ? "" : "react-portfolio/"}portfolio/` + portfolio.cover} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='slideshowDots'>
                {
                    portfolio.map((_, idx) => {
                        return (
                            <div key={idx} className={`slideshowDot${index === idx ? " active" : "" }`} onClick={() => { setIndex(idx) } }></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeSlideshow