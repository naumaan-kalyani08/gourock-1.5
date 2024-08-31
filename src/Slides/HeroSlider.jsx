import React, { useState } from "react";
import { heroSliderData } from "../Data/DynamicData";
 
function HeroSlider() {
    const [HeroSlider, setHeroSlider] = useState(heroSliderData)
    return (
        <div className="slider-wrapper custom">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"  data-bs-interval="2000">
            <div className="carousel-inner">
                    {HeroSlider.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={item.image    } alt={item.altText} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default HeroSlider;
