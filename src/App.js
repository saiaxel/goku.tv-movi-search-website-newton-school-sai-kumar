import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import MovieList from './Component/MovieList';
import MovieListHeading from './Component/MovieListHeading';
import SearchBox from './Component/SearchBox';
function App() {
  const [movies,setMovies] = useState([]);
  const [input,setInput] = useState('');
  const getMovieRequest = async (input) => {
    const url = `https://www.omdbapi.com/?&apikey=a332bc06&s=${input}`;
    const response = await fetch(url);
    const responseToJson = await response.json();

    console.log(responseToJson.Search);
    
    if(responseToJson.Search) {
      setMovies(responseToJson.Search);
    }
  }
  useEffect(() => {
    getMovieRequest(input);
  },[input])
  return (
    <div className='container-fluid movie-app'>
      <div className='heading row d-flex align-item-center mt-4 mb-4'>
        <MovieListHeading heading='Loki.Tv'/>
        <div className='col col-sm-4'>
      <input className='form-control' placeholder='Enter Movie Name...' value={input} onChange={(e) => setInput(e.target.value)}></input>
    </div>
      </div>
      <div className='row'>
      <MovieList movies={movies} />
    </div>
    </div>
  );
}

export default App;
