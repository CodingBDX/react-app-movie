import React from 'react'

export default function Card({movie}) {
  return (
    <div className='card'>
      <img src={ movie.poster_path ?
        
        "https://image.tmdb.org/t/p/w500/" + movie.poster_path : './img/poster.png'} alt={movie.title} />
      <h2>{movie.title }</h2>
    </div>
  )
}
