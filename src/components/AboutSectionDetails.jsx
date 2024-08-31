import React from "react";
import SlotNumber from "./SlotNumber";

const AboutSectionDetails = () => {
  return (
    <div className="aboutSectionDetailsWrapper about-height">
      <div className="row my-2 justify-content-center">
        <div className="col-lg-3 flexboxCenter about-left-custom">
          <div className=" my-3">
            <span className="d-inline-block outerCircle ">
              <span className="innerCircle ">
                <p className="text-center no-of-experience slotNumberDesign">
                  <SlotNumber value={50} />
                  {/* 50 */}
                  <sup className="symbol">+</sup>
                </p>
                <p className="experience-text">Years  Of   Experience </p>
              </span>
            </span>
          </div>
        </div>
        <div className="col-lg-9 ">
          <div className="px-2">
            <h4>Our Business</h4>

            <div className="row slotNumberDesign justify-content-center text-center">
              <div className="col-lg-3">
                <SlotNumber value={'10,000'} className={'numbers'}/>
                <p> Outlet Coverage</p>
              </div>

              <div className="col-lg-3 ">
                <span className="flexboxCenter">
                <SlotNumber value={'1,200'} className={'numbers'} /> +
                </span>
                <p>Products</p>
              </div>

              <div className="col-lg-3 ">
                <SlotNumber value={5} className={'numbers'}/>
                <p>Manufacturing Plants</p>
              </div>
            </div>

            <span className="text-justify">
              <h5>Distribution</h5>
              <p className="about-text">
                We do merchandise/ Distributions of consumer goods includes
                various Safety and Protective products (North Brands),
                Agrochemicals/products (Osho Brands), and various FMCG products
                such as Cooking Oil, Soap, Detergent, Fat, Margarine, Batteries
                / Bulbs / Safety Matches / Cosmetics, and Dental Care products /
                Sweets / Bubble-gums. Bulk commodities included Rice, Sugar,
                Salt, etc. We have been servicing the needs of the country’s
                Defence, Mining, Agriculture, Transport sectors, and various
                industries for so many years. We are also the regular supplier
                of Forced Ventilation Ducting’s, Spiral Ducting, and Ventilation
                accessories to KCM and Mopani Mines since the ZCCM era.
              </p>
            </span>


            <div className="">
              <span>
                <h5>Manufacturing</h5>

                <p>
                  Manufacturing Activities all of which are ISO9002 / 2008
                  certified includes the production like Mining related
                  products, Tents, Tarpaulins, Rainwear products, etc., Candles,
                  Floor polish, Roofing Sheets, Toilet Tissues and Serviettes,
                  Safety Matches.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionDetails;
