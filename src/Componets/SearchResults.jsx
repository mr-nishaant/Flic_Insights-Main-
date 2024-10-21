import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HrMovieCard from "./HrMovieCard";
import GlobalApi from "../Services/GlobalApi";
const API_KEY = GlobalApi.api_key;
const TMDB_API_URL = GlobalApi.movieBySearchUrl;

function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${TMDB_API_URL}?api_key=${API_KEY}&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  if (loading) {
    return (
      <div>
        <h1 className="flex text-white justify-center font-serif text-3xl">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="md:px-16 px-5">
      <h2 className="text-white">Search Results for: "{query}"</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) =>
            movie.backdrop_path ? (
              <HrMovieCard key={movie.id} movie={movie} />
            ) : null
          )
        ) : (
          <p className="text-white">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
