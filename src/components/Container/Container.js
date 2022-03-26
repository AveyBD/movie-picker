import React, { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import Sidearea from "../Sidearea/Sidearea";

const Container = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch('database.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:px-10">
      <div className="md:col-span-3">
        <Movies></Movies>
        <h2>Total Movie: {movies.length}</h2>
      </div>
      <div className="md:col-span-1">
        <Sidearea></Sidearea>
      </div>
    </div>
  );
};

export default Container;
