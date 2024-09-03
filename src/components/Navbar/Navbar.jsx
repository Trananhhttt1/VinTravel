import React, { useState } from "react";
import "./navbar.scss";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TfiAlignJustify } from "react-icons/tfi";
const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavbar");
  };
  const close = () => {
    setActive("navBar");
  };

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);
  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <MdTravelExplore className="icon" />
              Du Lịch
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Product
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn loginBtn">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>
          <div onClick={close} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div className="toggleNavbar" onClick={showNavBar}>
          <TfiAlignJustify className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
