import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import Header from '../components/Header'

export default function UserList() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
    for (let i = 0; i < moviesId.length; i++) {

      axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=502a9f510ae5c1c188565b0f0c3ffa85`).then((res) => setListData((listData) => [...listData,res.data]))
    }
  }, [])
  
  return (
    
    <div><Header />
    <h2>Coup de coeurs </h2>
              <div className='result grid xl:grid-cols-3 gap-1 md:grid-cols-2 sm:grid-cols-1'>
        {listData.length > 0 ? listData.map((movie) => <Card key={movie.id} movie={movie }/>) : 'no movie'}
      </div>

    </div>

    
  )
}
