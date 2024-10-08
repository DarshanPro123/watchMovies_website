import React, { useEffect, useState } from "react";
import ListCard from "./ListCard.jsx";
import axios from "axios";

const MoviesList = ({ searchValue }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApi = async () => {
    setLoading(true); //
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: `${searchValue ? searchValue : "game"}` },
      headers: {
        "x-rapidapi-key": "e296ab53cbmsh16d082048d83971p1774fajsnc11650bb3c88",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(options);
      setMoviesData(response.data.d);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleApi();
  }, [searchValue]);

  return (
    <div className="box">
      <h2>
        Movies <span>{moviesData.length} results</span>
      </h2>
      <button className="btn-toggle">+</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list">
          {moviesData.map((movie) => (
            <ListCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
