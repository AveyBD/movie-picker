import React from 'react';

const Movie = ({movie}) => {
    console.log(movie);
    const {id, category, name, duration, price, date, ratings, director, img } = movie;
    return (
        <div className='rounded border-2 border-green-200 shadow-lg px-5'>
            <img className="p-2 rounded border-2 shadow mt-2" src={img} alt={name} />
            <h2>{name}</h2>
            <h2>{category}</h2>
            <h2>Director: {director}</h2>
            <h2>{duration}</h2>
            <h2>Release Date: {date}</h2>
            <h3>IMDB Ratings: {ratings}</h3>
            <h2>Price: ${price}</h2>

        </div>
    );
};

export default Movie;