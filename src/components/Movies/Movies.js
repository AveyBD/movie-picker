import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = () => {
    // loading data from database
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch('database.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    return (
        <div>
            {/* seding data to movie components */}
         {
            movies.map(movie=><Movie 
                key={movie.id}
                movie={movie}
                ></Movie>)
        }
        </div>
    );
};

export default Movies;