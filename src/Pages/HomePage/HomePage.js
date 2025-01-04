import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchPopularMovies } from "../../api";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Pagination from "../../Components/Pagination/Pagination";
import "./HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(fetchPopularMovies(page)).then((response) => {
      setMovies(response.data.results);
    });

  }, [page]);

  return (
    <div className="homepage">
      <h1>Popular Movies</h1>
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

export default HomePage;
