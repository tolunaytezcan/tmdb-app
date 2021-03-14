import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import axios from "../../axios";
import { requests } from "../../constants";
import Movie from "./Movie";

import "./Homepage.css";

function Homepage({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(fetchUrl);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <div className="display">
        <h2>{title}</h2>

        {title === "What's Popular" && (
          <div className="navWrapper">
            <Router>
              <NavLink
                to="/"
                exact={true}
                onClick={() => {
                  setUrl(requests.fetctList);
                }}
                className="Link"
                activeClassName="activeLink"
              >
                Streaming
              </NavLink>
              <NavLink
                to="/on-tv"
                onClick={() => {
                  setUrl(requests.fetchActionMovies);
                }}
                className="Link"
                activeClassName="activeLink"
              >
                On TV
              </NavLink>
              <NavLink
                to="/for-rent"
                onClick={() => {
                  setUrl(requests.fetchComedyMovies);
                }}
                className="Link"
                activeClassName="activeLink"
              >
                For Rent
              </NavLink>
              <NavLink
                to="/in-theaters"
                onClick={() => {
                  setUrl(requests.fetchTheater);
                }}
                className="Link"
                activeClassName="activeLink"
              >
                In Theaters
              </NavLink>
            </Router>
          </div>
        )}
        {title === "Free To Watch" && (
          <div className="navWrapper">
            <Router>
              <NavLink
                to="/"
                exact={true}
                onClick={() => {
                  setUrl(requests.fetctList);
                }}
                className="Link"
                activeClassName="activeLink"
              >
                Movies
              </NavLink>
              <NavLink
                to="/tv"
                onClick={() => {
                  setUrl(requests.fetchActionMovies);
                }}
                className="Link"
                activeClassName="activeLink"
              >
                TV
              </NavLink>
            </Router>
          </div>
        )}
      </div>

      <Movie movies={movies}></Movie>
    </div>
  );
}

export default Homepage;
