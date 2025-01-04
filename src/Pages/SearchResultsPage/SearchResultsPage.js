import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { searchMovies } from "../../api";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Pagination from "../../Components/Pagination/Pagination";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      axios.get(searchMovies(query, page)).then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      });
    }
  }, [query, page]);

  console.log(movies)

  if (!query) {
    return <div className="search-error">Please enter a search term.</div>;
  }

  return (
    <div className="search-results-page">
      <h1>Search Results for :<strong className="search-query">{query}</strong></h1>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
      {movies.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
};

export default SearchResultsPage;
