import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/mee.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sorophine Noel</h1>
        <h5>
          <div className="text-light">Fullstack Developer</div>
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
