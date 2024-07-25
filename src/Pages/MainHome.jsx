import React, { useState, useEffect, createContext, useContext } from "react";
import CharacterList from "../components/CharacterList";
import Product from "../components/Product";
import { useAppContext } from "../components/Provider";
import Header from "../components/Header";

const MainHome = () => {
  const { characters, loadMore, page} = useAppContext();

  const handleLoadMore = (pages) => {
    loadMore(pages)
  }

  return (
    <>
    <Header/>
      <CharacterList>
        {characters.map((character) => (
          <Product
            key={character.id}
            image={character.image}
            characterName={character.name}
            id={character.id}
          />
        ))}
      </CharacterList>
      <div id="button-next-container">
          <button onClick={() => handleLoadMore(page)}>Load More</button>
      </div>
    </>
  );
};

export default MainHome;
