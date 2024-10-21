import React from 'react'
import {useNavigate } from 'react-router-dom';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/movie/${movie.id}`); 
  };
  return (
    <section
      onClick={handleClick} 
      className='hover:scale-110 transition-all duration-150 ease-in relative cursor-pointer'
    >
      
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className='w-[110px] md:w-[220px] rounded-lg hover:border-[3px] hover:border-gray-400  shadow-md shadow-green-300 border-2 border-slate-900 hover:-rotate-1'
        alt={movie.title}
      />
      <h2 className='w-[110px] md:w-[220px] text-white md:mt-2 mt-3'></h2>
    </section>
  )
}

export default MovieCard