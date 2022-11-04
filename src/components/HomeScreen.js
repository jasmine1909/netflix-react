import React from "react";
import requests from "../Request";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      {/* banner */}
      <Banner />
      {/* row */}
      <Row
        title="Trending Movie"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <p
        style={{
          backgroundColor: "black",
          textAlign: "center",
          color: "white",
          padding: "15px",
        }}
      >
        {" "}
        Copyright &copy; 2022 JasmineHoang. All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default HomeScreen;
