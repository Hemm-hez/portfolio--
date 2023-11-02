import React from "react";
import stylefoot from "../assets/styleleastfoot.css";

const Leastfoot = () => {
  return (
    <>
      <div className="footer">
       <div className="textlist">
       <h5>Interested working with me?</h5>
        <p>
          I'm active on all socila media platforms listed below,but you can also
          get in touch with me on an Email and i will get back to you within
          24-48 hours.
        </p>
        <button>Get in touch</button>
       </div>
      </div>
      <div className="nameandicon">
      <p>Micheal Hemmhez</p>
      <div className="iconlist">
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com/hemmhez/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/Hemm-hez?tab=repositories"><i className="fa-brands fa-github"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
       </div>
      </div>
    </>
  );
};

export default Leastfoot;
