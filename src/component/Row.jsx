import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
const Row = ({ title, requests,rowId }) => {
  const [movie, setMovies] = useState([]);
  
  useEffect(() => {
    const dataFetch = async () => {
      const res = await axios.get(requests);
      const data = await res.data.results;
      setMovies(data);
    };
    dataFetch();
  }, [requests]);

  const slideLeft=()=>{
    var slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft - 500;
  }
  const slideRight=()=>{
    var slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft +500
  }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        <div id={"slider"+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movie.map((e, i) => {
           return <Movie e={e} i={i}/>
          })}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
      </div>
    </>
  );
};
export default Row;
