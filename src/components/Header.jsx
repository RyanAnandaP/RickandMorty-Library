import React from "react";
import RickLogo from "../assets/rickmortylogo.png";

const Header = () => {
  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src={RickLogo} alt="Rick Morty Logo" />
          <a href="/">
            <h1>Rick & Morty</h1>
          </a>
        </div>
        <a href="/locations" id="header-location">
          Location
        </a>
      </header>
    </>
  );
};

export default Header;
