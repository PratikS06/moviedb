import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import TopRatedPage from "./Pages/TopRatedPage/TopRatedPage";
import UpcomingPage from "./Pages/UpcomingPage/UpcomingPage";
import MovieDetailPage from "./Pages/MovieDetailPage/MovieDetailPage";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
