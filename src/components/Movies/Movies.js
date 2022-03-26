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
    const addToList = () => {
        console.log("Clicked");
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {/* seding data to movie components */}
         {
            movies.map(movie=><Movie 
                key={movie.id}
                movie={movie}
                addToList = {addToList}
                ></Movie>)
        }
        </div>
    );
};

export default Movies;