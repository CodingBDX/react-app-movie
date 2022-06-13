import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';


function Form()  {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("star wars");
  const [sortGoodBad, setSortGoodBad] = useState(null);
  const [sortLanguage, setSortLanguage] = useState(null);
  const [sortTopMovies, setSortTopMovies] = useState("search/movie?");


  useEffect(() => {


    axios.get(`https://api.themoviedb.org/3/${sortTopMovies}api_key=502a9f510ae5c1c188565b0f0c3ffa85&query=${search}&language=${sortLanguage}`).then((res) => setMoviesData(res.data.results));
  }, [search, sortLanguage, sortTopMovies]);


  return (
    <div className='form-component'>
      <div className='form-container p-2'>
        <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" id="search-input" onChange={(e) => setSearch(e.target.value)} class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rechercher un film une serie" required />
        <button value='Rechercher' type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


        <div class="flex-col   w-full bg-white p-1">
  

  <div className='btn-sort-container' class="flex bg-gray-100 p-2 w-full justify-center space-x-0">
    <button className='btn-sort' onClick={() => setSortGoodBad("goodToBad")} id='goodToBad' class="min-w-auto w-[40%] h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
    Top ⬆️
    </button>
    <button className='btn-sort' id='badToGood' onClick={() => setSortGoodBad("badToGood")} class="min-w-auto w-[40%] h-10 bg-blue-300 p-2 rounded-r-full hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
      Flop ⬇️
    </button>
          </div>
          
<div class="flex items-center gap-2">
<div class="flex flex-row gap-2">


  <div class="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 p-2">
    <label class="cursor-pointer">
      <div class="flex h-5 w-9 items-center rounded-full bg-red-300">
        <input class="peer hidden" type="checkbox" checked />
        <div
          class="h-3 w-3 translate-x-1 rounded-full bg-white transition-transform peer-checked:translate-x-5"
        ></div>
      </div>
    </label>
    <div class="text-white">delete</div>
  </div>

               <label for="checkbox" class="relative flex-inline items-center isolate p-4 rounded-2xl">
        <input id="checkbox" type="checkbox" onChange={() => setSortLanguage("fr-FR")} class="relative peer z-20 text-purple-600 rounded-md focus:ring-0" />
        <span class="ml-2 relative z-20">French language</span>
        <div class="absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border rounded-2xl"></div>
    </label>

              
               <label for="checkbox" class="relative flex-inline items-center isolate p-4 rounded-2xl">
        <input id="checkbox" type="checkbox" onClick={() => setSortTopMovies("trending/movie/day?")} class="relative peer z-20 text-purple-600 rounded-md focus:ring-0" />
        <span class="ml-2 relative z-20">Top Films</span>
        <div class="absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border rounded-2xl"></div>
    </label>


               <label for="checkbox" class="relative flex-inline items-center isolate p-4 rounded-2xl">
        <input id="checkbox" type="checkbox" onClick={() =>  setSortTopMovies("trending/tv/day?")} class="relative peer z-20 text-purple-600 rounded-md focus:ring-0" />
        <span class="ml-2 relative z-20">Top Series</span>
        <div class="absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border rounded-2xl"></div>
    </label>
</div>
</div>

      </div>
</div>    
      <div className='result grid xl:grid-cols-3 gap-1 md:grid-cols-2 sm:grid-cols-1'>
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === 'goodToBad') {
              return b.vote_average - a.vote_average;
         
            } else if(sortGoodBad === 'badToGood') {
              return a.vote_average - b.vote_average;
            }

         
        }).map((movie) => <Card key={movie.id} movie={movie }/>)}
      </div>
    </div>
  )
}

export default Form
