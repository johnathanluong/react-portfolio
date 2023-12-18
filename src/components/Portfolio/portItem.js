import { useParams } from 'react-router-dom';
import './portItem.scss';
import Loader from 'react-loaders';
import portfolioData from "../../data/portfolio.json"
import { useEffect, useState } from 'react';

const PortItem = () => {
    const { item } = useParams();
    const [ SelectedPort, setSelectedPort ] = useState({});
    
    //finds the portfolio item based on param
    useEffect(() => {
        if (portfolioData.portfolio.length > 0 && item) {
          const foundItem = portfolioData.portfolio.find((portfolioItem) => portfolioItem.portLink === item);
          if (foundItem) {
            setSelectedPort(foundItem);
          }
        }
    }, [item]);

    return (
        <>
        <div>
            {SelectedPort.title}
        </div>
        <Loader type='cube-transition' />
        </>
    )
}

export default PortItem

