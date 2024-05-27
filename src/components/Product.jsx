import React from "react";

function Product({ type, image, title, price }) {
  return (
    <article>
      <span>{type}</span>
      <img src={image} alt={title} />
      <p>{title}</p>
      <h4>€{price},-</h4>
    </article>
  );
}

export default Product;