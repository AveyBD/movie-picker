import React from "react";

const MovieList = ({ movie }) => {
  return (
    <div>
      <div className="pl-5 grid grid-cols-2">
        <div>
            <img className="w-10 h-10" src={movie.img} alt="" />
        </div>
        <div>{movie.name}</div>
      </div>
    </div>
  );
};

export default MovieList;
