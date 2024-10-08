import React from "react";
import MoviesList from "./MoviesList.jsx";
import SiderBar from "./SiderBar.jsx";

const MainBox = ({ searchValue }) => {
  return (
    <>
      <main className="main">
        <SiderBar />
        <MoviesList searchValue={searchValue} />
      </main>
    </>
  );
};

export default MainBox;
