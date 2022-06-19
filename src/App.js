import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';



//API Key f5374ee4
// old apiKey http://www.omdbapi.com?apikey=f5374ee4
// Jikan anime API path: https://api.jikan.moe/v3

const API_URL = 'http://www.omdbapi.com?apikey=f5374ee4';

// const movie1 = {
//  "Title": "The Avengers",
//  "Year": "1998",
//  "imdbID": "tt0118661",
//  "Type": "movie",
//  "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  return (
    <div className="app">
      
      <div className='titleSearch'>
            <div className="brand">
              <h1>Popcorn<span className='tv'>TV</span></h1>
            </div>
          
          <div className="search">
            <input 
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

           <i class="fa-solid fa-magnifying-glass" onClick={() => searchMovies(searchTerm)} />
          </div>
      </div>

    {movies?.length > 0 
       ? (
        <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
        </div>
       ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>

       )} 
    </div>
  );
}

export default App;

//56:29 na ko sa tutorial