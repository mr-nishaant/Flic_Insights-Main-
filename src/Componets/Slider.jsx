import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 143;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 143;
  };

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="md:mx-16 mx-2">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[210px] cursor-pointer left-3 bg-rose-500 rounded-full"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[210px] cursor-pointer right-3 bg-rose-500 rounded-full"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto py-4 pt-0 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) =>
          item.backdrop_path? (
            <div key={item.id} className="relative min-w-[99.5%] mx-1">
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                alt={item.name || item.title}
                className="md:h-[420px] object-cover object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in cursor-pointer min-w-[99.5%] mx-1"
                onClick={() => handleClick(item.id)}
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-md px-2 py-1 rounded-md">
                {item.title || item.name}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Slider;
