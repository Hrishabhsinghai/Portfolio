import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
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
              />{" "}
              <Link to="hrishabhsinghai77@gmail.com">
                {" "}
                hrishabhsinghai77 @gmail.com{" "}
              </Link>{" "}
            </h4>{" "}
          </div>{" "}
        </div>{" "}
        <div className="right">
          <h4> About me </h4>{" "}
          <p>
            {" "}
            This is me Hrishabh Jain, A react developer, I enjoy discussing new
            projects and design challenges.{" "}
          </p>{" "}
          <div className="social">
            <h4>
              <Link to="https://www.linkedin.com/in/hrishabh-jain-13bab7209">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginLeft: "1rem" }}
                />{" "}
              </Link>{" "}
              <Link to="https://www.instagram.com/hrishabhsinghai/?utm_source=qr">
                <FaInstagram
                  size={30}
                  style={{ color: "#fff", marginLeft: "1rem" }}
                />{" "}
              </Link>{" "}
            </h4>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;
