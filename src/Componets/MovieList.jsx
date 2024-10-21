import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[40px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} left-0 bg-rose-500 rounded-full `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto md:gap-8 gap-2
     scrollbar-none scroll-smooth md:pt-4 pt-1 md:px-3 md:pb-4 pb-0"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard key={item.id} movie={item}/>
            ) : (
              <MovieCard key={item.id} movie={item}/>
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[40px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} right-0 bg-rose-500 rounded-full` }
      />
    </div>
  );
}

export default MovieList;
