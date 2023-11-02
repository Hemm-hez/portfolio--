import React from "react";
import style from "../assets/stylesect.css";
import walmart from "../assets/Walmart.svg";
import morgan from "../assets/JP Morgan.svg";
import visa from "../assets/Visa.svg";
import tinder from "../assets/Tinder.svg";
import samsung from "../assets/Samsung.svg";
import verizon from "../assets/Verizon.svg";
import yelp from "../assets/YelpCamp.png";
import spense from "../assets/Spense.png";

const Middlesect = () => {
  return (
    <>
      <section className="">
        <div className="biggertext">
          <h2>Helping companies build better, scalable software.</h2>
          <p>
            Award-winning web developer and author, with over 15+ years working
            experience with fortune 500 companies like Apple, Google, Facebook,
            and more.
          </p>
        </div>
        <div className="alllogos">
            <img src={walmart} alt="" />
            <img src={morgan} alt="" />
            <img src={visa} alt="" />
            <img src={tinder} alt="" />
            <img src={samsung} alt="" />
            <img src={verizon} alt="" />
        </div>
        <div className="images">
          <div className="imageflex">
            <img src={spense} alt="" />
            <a href="#">Spense.com  <span>
                  <i className="fa-solid fa-arrow-right"></i>
              </span></a>
            <p>
              Rethinking the way writers get paid, an open-source platform designed
              to help writers focus more on writing , and less on when and how
              they'll get paid. Project in collaboration with Codewell.cc
            </p>
          </div>
          <div className="imageflex">
            <img src={yelp} alt="" />
            <a href="#">Yelp.com  <span>
                  <i className="fa-solid fa-arrow-right"></i>
              </span></a>
            <p>
              Allowing backpack travelers to perfectly plan their trip through
              an open-sources platform similar to TripAdvisor. With over 1m MAU
              YelCamp has een the crowd's favorite in 2021
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Middlesect;
