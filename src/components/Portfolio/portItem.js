import { useParams } from 'react-router-dom';
import './portItem.scss';
import Loader from 'react-loaders';
import portfolioData from "../../data/portfolio.json"
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Slideshow from '../Slideshow';

const PortItem = () => {
    const { item } = useParams();
    const [ SelectedPort, setSelectedPort ] = useState({});
    const [ letterClass, setLetterClass ] = useState('text-animate');
    
    //finds the portfolio item based on param
    useEffect(() => {
        if (portfolioData.portfolio.length > 0 && item) {
          const foundItem = portfolioData.portfolio.find((portfolioItem) => portfolioItem.portLink === item);
          if (foundItem) {
            setSelectedPort(foundItem);
          }
        }
    }, [item]);

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portItem-page'>
                <h1 className='page-title'>
                    <AnimatedLetters letterClass={letterClass} strArray={`${SelectedPort.title}`.split("")} idx={10} />
                </h1>
                <Slideshow images={SelectedPort.images}/>
            </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default PortItem

