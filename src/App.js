import {useState, useEffect} from 'react'
import Movie from "./components/Movie";

const FEATURED_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=c281d749806def6ff5ee87d033056675&language=en-US&page=1"
const SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie?api_key=c281d749806def6ff5ee87d033056675&query="

function App() {
const [movies, setMovies] = useState([])
const [search, setSearch] = useState('')

useEffect(() => {
getMovies(FEATURED_MOVIES)
},[]);

const getMovies = (API) => {
  fetch(API)
  .then((res) => res.json())
  .then((data) => {
    setMovies(data.results)
  })
}

const handleOnSubmit = (e) => {
  e.preventDefault();

  if(search){
  getMovies(SEARCH_MOVIES + search)

  setSearch('')
  }
}

const handleOnChange = (e) => {
  setSearch(e.target.value);
}

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
        <input type='search' placeholder='Search movie...'  className='search' value={search} onChange={handleOnChange}/>
        </form>
      </header>
      <div className='movies'>
      {
        movies.length > 0 && movies.map((movie) => <Movie {...movie} key={movie.id}/>)
      }    
      </div>  
    </>
  );
}

export default App;
