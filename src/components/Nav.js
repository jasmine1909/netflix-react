import React, { useState, useEffect } from "react";
import "./Nav.css";
import Logo from ".././img/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={Logo} onClick={() => navigate("/")} />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://static.scistarter.org/img/nobody.png"
        />
      </div>
    </div>
  );
};

export default Nav;
