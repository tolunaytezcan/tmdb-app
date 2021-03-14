import React from "react";
import { baseImgUrl } from "../../constants";
import Rate from "./Rate";
import "./Homepage.css";

function Movie({ movies }) {
  return (
    <div className="row_posters">
      {movies.map((movie) => (
        <div>
          <img
            className={`image ${movie.vote_average <= 7 && "low"} ${
              movie.vote_average > 7 && "mid"
            } ${movie.vote_average > 8 && "high"}`}
            src={`${baseImgUrl}/${movie.poster_path}`}
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
  );
}

export default Movie;
