import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import MovieList from "../MovieList/MovieList";
import Sidearea from "../Sidearea/Sidearea";

const Container = () => {
  // loading data from database
  const [movies, setMovies] = useState([]);
  const [wish, setWish] = useState([]);
  useEffect(() => {
    fetch("database.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const addToList = (movie) => {
    const newWish = [...wish, movie];
    setWish(newWish);
    console.log(wish);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:px-10 gap-5">
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} addToList={addToList}></Movie>
          ))}
        </div>
      </div>
      <div className="md:col-span-1">
        <div className="h-screen sticky top-0 border-2 border-green-200 rounded shadow">
          <h2 className="text-center font-bold text-2xl border-2 border-green-600 rounded">
            Your List
          </h2>
          <div>
            {wish.map(movie=>(<MovieList key={movie.id} movie={movie}></MovieList>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
