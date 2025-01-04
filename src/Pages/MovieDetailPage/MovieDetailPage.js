import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";
import axios from "axios";
import { fetchMovieCast, fetchMovieDetails, getImageUrl } from "../../api";

const MovieDetailPage = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(fetchMovieDetails(id)).then((response) => setMovie(response.data));
    axios.get(fetchMovieCast(id)).then((response) => setCast(response.data.cast));
  }, [id]);
  // console.log(movie);
  // console.log(cast);
  
  if (!movie) {
    return (
      <div>Loading...</div>
    )
  }
  
  return(
    <div className="movie-detail-page">
      {/* Movie Header */}
      <div className="movie-header">
        <div className="first">
        <div className="second">
        <img  
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="rating">Rating: {movie.vote_average}</p>
          <p>
            {movie.runtime} min |{" "}
            {movie.genres?.map((genre) => genre.name).join(", ") || "N/A"}
          </p>
          <p>Release Date: {movie.release_date}</p>
        </div>
        </div>
        <h2>Overview</h2>
        <p>{movie.overview || "No overview available."}</p>
        </div>
        <div className="third">
        <img 
        className="movie-bg-img"
        src={getImageUrl(movie.backdrop_path)}
        /> 
        </div>
      </div>

      {/* Cast Section */}
      <div className="movie-cast">
        <h3>Cast</h3>
        <div className="cast-container">
          {cast.length > 0 ? (
            cast.map((member)=>{
              return(
                <div key={member.id} className="cast-card">
                  <img src={getImageUrl(member.profile_path)} alt={member.name} className="cast-member
                  image
                  "/>
                  </div>
              )
            })
          ) : (
            <p>No cast available.</p>
          )}
        </div>
      </div>
    </div>

  )
}

export default MovieDetailPage;
