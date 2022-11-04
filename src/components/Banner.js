import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../Request";
import axios from "../axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchActionMovies);
      console.log(response);
      setMovie(response.data.results[1]);
      return response;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button"> My List </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}{" "}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
