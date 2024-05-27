import React from "react";

function Tile({ image, description, title, children }) {
    console.log(image, description, title, children)
  return (
    <section>
        {image && <img src={image} alt={description} />}
        <h2>{title}</h2>
        {children}
    </section>
  );
}

export default Tile;