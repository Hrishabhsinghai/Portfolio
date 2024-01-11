import "./FooterStyles.css";

import React from "react";
import { FaHome, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-continer">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />{" "}
            <div>
              <p> Gopalpura, shamshabad Road Agra </p>{" "}
              <p> AGRA, PIN .283125 </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-8057399251{" "}
            </h4>{" "}
          </div>{" "}
        </div>{" "}
        <div className="right"> </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;
