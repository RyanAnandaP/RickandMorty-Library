import React from "react";
import { Link } from 'react-router-dom';

const Product = ({ image, characterName, id}) => {
  return (
    <article id="product">
      <img src={image} alt="this is desc" />
      <div id="product-content">
        <div>
          <Link to={`/detail/${id}`}><h3 id="character-name">{characterName}</h3></Link>
        </div>
      </div>
    </article>
  );
};

export default Product;
