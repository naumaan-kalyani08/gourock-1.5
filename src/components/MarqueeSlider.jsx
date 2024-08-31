import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ data, speed, direction, playStatus }) => {
    // Duplicate the data to ensure an infinite loop effect
    const extendedData = [...data, ...data];

    return (
        <Marquee
            pauseOnHover={true}
            play={playStatus}
            direction={direction}
            speed={speed}
            className="box-wrapper"
        >
            {extendedData.map((item) => (
                <div className="partner-logo-slider-wrapper" id={item.id} key={item.id}>
                    <img src={item.logo} alt="" />
                </div>
            ))}
        </Marquee>
    );
};

export default MarqueeComponent;
