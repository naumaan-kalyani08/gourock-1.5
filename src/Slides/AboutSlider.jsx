import React, { useState } from "react";
import { brandSlider, partnerSlider } from "../Data/DynamicData";
import MarqueeComponent from "../components/MarqueeSlider";
import AboutSectionDetails from "../components/AboutSectionDetails";

const AboutSlider = () => {
  return (
    <>
      <MarqueeComponent
        data={brandSlider}
        speed={80}
        direction={"left"}
        playStatus={true}
      />

      <AboutSectionDetails />
      <MarqueeComponent data={partnerSlider} speed={120} direction={"right"} />
      {/* <Marquee
        pauseOnHover={true}
        play={true}
        direction={"right"}
        speed={120}
        className="box-wrapper"
      >
        {Logo.map((item) =>(
        <div className="partner-logo-slider-wrapper" id={item.id}>
          <img src={item.logo} alt="" srcset="" />
        </div>
        ))}
      </Marquee>       */}
    </>
  );
};

export default AboutSlider;
