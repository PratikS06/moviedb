import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchUpcomingMovies } from "../../api";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Pagination from "../../Components/Pagination/Pagination";
import "./UpcomingPage.css";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(fetchUpcomingMovies(page)).then((response) => {
      setMovies(response.data.results);
    });
  }, [page]);

  return (
    <div className="upcoming-page">
      <h1>Upcoming Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default UpcomingPage;
