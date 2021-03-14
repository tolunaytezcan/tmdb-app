import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Rate from "./Rate";
import { baseImgUrl } from "../../constants";
import "./Homepage.css";

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
              className={`image ${movie.vote_average * 10 <= 65 && "low"} ${
                movie.vote_average * 10 > 65 && "mid"
              } ${movie.vote_average * 10 > 80 && "high"}`}
              src={`${baseImgUrl}/${movie.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
            />
            <b>%{movie.vote_average * 10}</b>
            <br />
            <strong className="movie_name">{movie.original_title}</strong>
            <p className="release_date">{movie.release_date}</p>
            <Rate />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
