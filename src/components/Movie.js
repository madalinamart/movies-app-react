import React from 'react'

const MOVIES_IMG = "https://image.tmdb.org/t/p/w1280"

const Movie = ({title, poster_path, overview, vote_average}) => {

  const setVoteClass = (vote) => {
    if(vote >= 8) {
      return 'green'
    } else if (vote >= 6) {
      return 'orange'
    } else {
      return 'red'
    }
  }
  return (
    <div className='movie-container'>
      <div className='header'>
      <img src={poster_path ? MOVIES_IMG + poster_path : "https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8="} alt={title} /> 
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      </div>
      <div className='overview'>
        <h2>Description:</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie