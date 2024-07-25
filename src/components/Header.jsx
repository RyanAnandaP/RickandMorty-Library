import React from "react";
import RickLogo from "../assets/rickmortylogo.png";
import { Link } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src={RickLogo} alt="Rick Morty Logo" />
          <Link to='/'>
            <h1>Rick & Morty</h1>
          </Link>
        </div>
        <Link to='/locations' id="header-location" >
          Location
        </Link>
      </header>
    </>
  );
};

export default Header;
