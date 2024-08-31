import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ data, speed, direction , playStatus }) => {
    return (
        <Marquee
            pauseOnHover={true}
            play={playStatus}
            direction={direction}
            speed={speed}
            className="box-wrapper"
        >
            {data.map((item) => (
                <div className="partner-logo-slider-wrapper" id={item.id} key={item.id}>
                    <img src={item.logo} alt="" />
                </div>
            ))}
        </Marquee>
    );
};

export default MarqueeComponent;
