import React from "react";

const CharacterList = ({ children }) => {
  return (
    <section id="character-list">
      <h2>All Characters</h2>
      <ul className="slide-up-fade-in" id="products">
        <li>{children}</li>
      </ul>
    </section>
  );
};

export default CharacterList;
