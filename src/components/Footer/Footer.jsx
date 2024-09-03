import React from "react";
import "./footer.scss";
import { MdTravelExplore } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="log oDiv">
          <div className="footerLogo">
            <a href="" className="logo flex">
              <h1 className="flex">
                <MdTravelExplore className="icon" /> Du Lich
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <FaFacebook className="icon" />
            <FaTwitterSquare className="icon" />
            <FaInstagramSquare className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Informations</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact</span>
          <span className="phone">+0988900987</span>
          <span className="email">isconection@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
