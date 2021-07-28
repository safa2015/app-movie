import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movielist, handleDelete}) => {
    return (
        <div className="container">
           <div className="row ml-5">
           {
                movielist.map((movie,index) => <MovieCard  handleDelete={handleDelete} movie={movie} key={index}/>)
            }
           </div>
        </div>
    )
}

export default MovieList
