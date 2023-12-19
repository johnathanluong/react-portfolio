import { useEffect, useRef, useState } from 'react';
import './index.scss';

const Slideshow = (obj) => {    
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
                () => (setIndex((prevIndex) => (
                    prevIndex === obj.images.length - 1 ? 0 : prevIndex + 1
                ),
            )
        ), 2500);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className='slideshow' onClick={console.log(obj)}>
            <div className='slideshowImages' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                /* {
                    obj.images.map((image, idx) => {
                        return(
                            <div className='slide' key={idx}>
                                <img className='slideImage' src={image} alt='image' />
                            </div>
                        )
                    })
                } */
                }
            </div>
            <div className='slideshowDots'>
                {obj.images.map((_, idx) => {
                    return (
                        <div key={idx} className={`slideshowDot${index === idx ? " active" : "" }`} onClick={() => { setIndex(idx) } }></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slideshow