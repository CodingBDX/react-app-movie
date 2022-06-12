import React from 'react'

export default function Card({movie}) {
  return (


<div class="bg-gray-100 flex justify-center sm:py-12">
  
  <div class="py-3  sm:max-w-xl  sm:mx-auto">
    <div class="bg-white shadow-lg border-gray-100 h-[30em] max-h-[40em]	 border sm:rounded-3xl p-8 flex space-x-8">
      <div class="h-48 overflow-visible w-1/2">
          <img class="rounded-3xl shadow-lg" src={ movie.poster_path ?
        
        "https://image.tmdb.org/t/p/w500/" + movie.poster_path : './img/poster.png'} alt={movie.title} />
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">
          <h2 class="text-3xl font-bold">{movie.title}</h2>
          <div class="bg-yellow-400 font-bold rounded-xl p-2">{movie.vote_average}</div>
        </div>
        <div>
              <div class="text-sm text-gray-400">{movie.genres}</div>
          <div class="text-lg text-gray-800">      {
        movie.release_date ? (<h5>sortie le : {movie.release_date }</h5>) : 'no date'
      }
</div>
        </div>
          <p class=" text-gray-400 max-h-40 overflow-y-hidden hover:rounded hover:overflow-y-visible hover:p-2 hover:max-h-full hover:bg-gray-200">{movie.overview}</p>
        <div class="flex text-2xl font-bold text-a">$83.90</div>
      </div>

    </div>
  </div>
  
</div>


  )
}
