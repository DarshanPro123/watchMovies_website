import React from "react";

const ListCard = ({ movie }) => {
  return (
    <>
      <li key={movie.id}>
        <img src={movie.i?.imageUrl || "default-image.jpg"} alt="poster" />
        <div>
          <h3>{movie.l}</h3>
          <p>Actors: {movie.s}</p>
        </div>
      </li>
    </>
  );
};

export default ListCard;
