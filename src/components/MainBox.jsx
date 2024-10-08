import React from "react";
import MoviesList from "./MoviesList.jsx";
import SiderBar from "./SiderBar.jsx";

const MainBox = ({ searchValue }) => {
  const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://image.tmdb.org/t/p/original/gQ0Emh2LT047Fip2HWye3NkrkQB.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Crow",
      Year: "2024",
      Poster:
        "https://image.tmdb.org/t/p/original/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
    },
    {
      imdbID: "tt01243093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt01330999",
      Title: "DeadPool",
      Year: "2024",
      Poster:
        "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt01243083",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt01242983",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt01242083",
      Title: "Flow",
      Year: "2024",
      Poster:
        "https://image.tmdb.org/t/p/original/dzDMewC0Hwv01SROiWgKOi4iOc1.jpg",
    },
  ];

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  return (
    <>
      <main className="main">
        <SiderBar />
        <MoviesList searchValue={searchValue} tempMovieData={tempMovieData} />
      </main>
    </>
  );
};

export default MainBox;

/*

<div className="box">
          <button className="btn-toggle">-</button>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{12} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{5}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{4}</span>
              </p>
              <p>
                <span>⌛️</span>
                <span>{120} min</span>
              </p>
            </div>
          </div>

          <ul className="list">
            {tempWatchedData.map((movies) => (
              <li key={movies.imdbID}></li>
            ))}
          </ul>
        </div>
 */
