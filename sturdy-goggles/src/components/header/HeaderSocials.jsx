import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/soroel" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
