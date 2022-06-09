import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';


function Form()  {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {


    axios.get('https://api.themoviedb.org/3/search/movie?api_key=502a9f510ae5c1c188565b0f0c3ffa85&query=avenger').then((res) => setMoviesData(res.data.results));
  }, []);


  return (
    <div className='form-component'>
      <div className='form-container'>
        <form>
          <input type="text" placeholder="entrez le titre d'un film" id='search-input'></input>
          <input type='submit' value="Rechercher"></input>
        </form>

        <div className='btn-sort-container'>
        <div className='btn-sort' id='goodToBad'>Top <span>::</span></div>
        <div className='btn-sort' id='badToGood'>Flop <span>::</span></div>

        </div>
      </div>
    
      <div className='result'>
        {moviesData.slice(0, 12).map((movie) => <Card key={movie.id} movie={movie }/>)}
      </div>
    </div>
  )
}

export default Form
