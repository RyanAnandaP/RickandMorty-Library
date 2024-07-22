import React from "react";

const CharacterList = ({ children }) => {
  return (
    <section id="character-list">
      <h2>Rick & Morty Characters List</h2>
      <ul id="products">
        <li>{children}</li>
      </ul>
    </section>
  );
};

export default CharacterList;
