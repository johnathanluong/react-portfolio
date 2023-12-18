import { useNavigate } from "react-router-dom";
import React from "react";

const RenderPortfolio = (portfolio) => {

    const navigate = useNavigate();

    const handleItemClick = (item) => {
        navigate(`/portfolio/${item}`);
    }

    return (
        <div className="images-container">
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" onClick={() => handleItemClick(port.portLink)} key={idx}>
                            <img src={port.cover} className="portfolio-image" alt={port.title} />
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RenderPortfolio