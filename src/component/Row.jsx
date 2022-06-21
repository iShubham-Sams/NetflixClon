import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Row = ({ title, requests }) => {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await axios.get(requests);
      const data = await res.data.results;
      setMovies(data);
    };
    dataFetch();
  }, [requests]);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movie.map((e, i) => {
            return (
                <div key={i} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[200px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-full object-cover block"
                src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                alt={e.title}
              />
              <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:bg-black/80 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{e?.title}</p>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Row;
