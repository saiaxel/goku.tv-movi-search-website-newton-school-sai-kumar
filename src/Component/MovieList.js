import React from 'react'

const MovieList = (props) => {
  return (
    <>
    {props.movies.map((movie) => (
    <div className='image-container d-flex justify-content-start m-3 ' key={movie.imdbID}>
        <img src={movie.Poster} alt='movie'></img>
        <div className='overlay d-flex align-items-center justify-content-center'>
        <p>Name:{movie.Title}</p>
         <p>Type:{movie.Type}</p>
         <p>Year:{movie.Year}</p>
        </div>
    </div>
    ))}
    </>
  )
}

export default MovieList