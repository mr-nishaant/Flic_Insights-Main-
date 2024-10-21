import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const API_KEY = GlobalApi.api_key;
const TMDB_API_URL = "https://api.themoviedb.org/3/movie";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${TMDB_API_URL}/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-white">Movie not found.</div>;
  }

  function MovieRating({ rating }) {
    const stars = [];
    const ratingInStars = rating / 2;
  
    // Loop to generate full stars, half stars, and empty stars
    for (let i = 1; i <= 5; i++) {
      if (ratingInStars >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />); // Full star
      } else if (ratingInStars >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />); // Half star
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />); // Empty star
      }
    }
  
    return <div className="flex">{stars}</div>;
  }

  return (
    <>
      <div className=" md:flex">
        <div className=" md:p-1 md:px-20 p-2 px-6 md:w-1/3 flex">
          {/* Movie Banner */}
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt={movie.title}
            className="rounded-lg mb-4 w-[300px] md:w-80"
          />
        </div>

        <div className="md:p-1 md:px-20 p-2 px-6 md:w-1/2 md:float-right">
          <h1 className="text-4xl font-bold text-green-400">{movie.title}</h1>
          <h2 className="text-2xl font-bold text-green-200">
            Tagline: {movie.tagline}
          </h2>
          <p className="text-red-400 mt-2">
            Release Date:{" "}
            {new Date(movie.release_date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <p className="mt-2 font-bold text-blue-500">Rating : {(movie.vote_average/2).toFixed(1)} / 5</p>
          <MovieRating rating={movie.vote_average} /> {/* Star rating component */}
          <p className="text-white mt-4 text-xl font-serif">
            Story: {movie.overview}
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
