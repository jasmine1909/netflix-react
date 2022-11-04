import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
import requests from "../Request";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      console.log(response);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          // ((isLargeRow && movie._poster_path) ||
          //   (!isLargeRow && movie.backdrop_path)) && (
          //   <img
          //     className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          //     key={movie.id}
          //     src={`${base_URL}${
          //       isLargeRow ? movie.poster_path : movie.backdrop_path
          //     }`}
          //     alt={movie.name}
          //   />
          // )

          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
