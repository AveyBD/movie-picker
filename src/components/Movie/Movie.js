import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Movie = ({ movie ,addToList }) => {
  const { id, category, name, duration, price, date, ratings, director, img } =
    movie;
  return (
    <div className="rounded border-2 border-green-200 shadow-lg px-5 h-200">
      <div>
        <img
          className="p-2 rounded border-2 shadow mt-2 mx-auto"
          src={img}
          alt={name}
        />
        <h2 className="text-xl font-semibold text-center mt-2">{name}</h2>
        <h2 className="font-thin text-right">
          {category} / {duration} / {date}
        </h2>
        <h2>
          <span className="font-bold">Director:</span> {director}
        </h2>
        <h3 className="flex">
          <img
            src="https://yts.mx/assets/images/website/logo-imdb.svg"
            alt=""
          />{" "}
          : {ratings}
        </h3>
        <h2>
          <span className="font-bold">Price</span>: ${price}
        </h2>
        <button onClick={()=>addToList(movie)} className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full">
          <span className="pr-2">Add to List</span>
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
    </div>
  );
};

export default Movie;
