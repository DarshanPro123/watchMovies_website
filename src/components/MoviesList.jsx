import React from "react";
import ListCard from "./ListCard.jsx";

const MoviesList = ({ tempMovieData }) => {
  return (
    <div className="box">
      <h2>Movies</h2>
      <button className="btn-toggle">+</button>
      <ul className="list">
        {tempMovieData.map((movie) => (
          <ListCard movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
