import React from "react";
import gmail from "../Assets/gmail.jpeg";
import linkedin from "../Assets/linkedin.jpeg";
import whatsapp from "../Assets/whatsapp.webp";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="media">
        <p>
          <img src={whatsapp} width={30} alt="" /> +(212) 762 7724 81
        </p>
        <p>
          <img src={gmail} width={30} alt="" /> mohamedng098@gmail.com
        </p>
        <p>
          <img src={linkedin} width={30} alt="" />
          <a href=" https://www.linkedin.com/in/mohamed-nogot/">
            Mohamed Nogot
          </a>
        </p>
      </div>
      <div className="copyright">
        <p>© 2023 MI market. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
