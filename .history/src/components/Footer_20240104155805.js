import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSnapchat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
              />{" "}
              + 91 - 8057399251{" "}
            </h4>{" "}
          </div>{" "}
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              hrishabhsinghai77 @gmail.com{" "}
            </h4>{" "}
          </div>{" "}
        </div>{" "}
        <div className="right">
          <h4> About the Company </h4>{" "}
          <p>
            {" "}
            This is me Hrishabh Jain, A react developer, I enjoy discussing new
            projects and design challenges{" "}
          </p>{" "}
          <div className="social">
            <h4>
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />{" "}
              <FaSnapchat
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />{" "}
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />{" "}
            </h4>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;
