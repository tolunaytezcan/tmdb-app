import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Homepage.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Homepage({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <div>
            <img
              className="row_poster"
              src={`${baseImgUrl}${movie.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
            />
            <strong className="movie_name">{movie.original_title}</strong>
            <p className="release_date">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
