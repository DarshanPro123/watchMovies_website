import React from "react";

const ListCard = ({ movie }) => {
  return (
    <>
      <li key={movie.imdbID}>
        <img src={movie.Poster} alt="poster" />
        <div>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </li>
    </>
  );
};

export default ListCard;
