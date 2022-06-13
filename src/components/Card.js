import React from 'react'


export default function Card({movie}) {
  const dateFormatter = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  }
  
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push('Action 🍿');
          break;
        case 12:
          genreArray.push("Adventure ⚔️");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comedy 🎭");
          break;
        case 80:
          genreArray.push("Crime 👮");
          break;
        case 99:
          genreArray.push("Documentary");
          break;
        case 18:
          genreArray.push("Drama");
          break;
        case 10751:
          genreArray.push("Family");
          break;
        case 14:
          genreArray.push("Fantasy 🧚");
          break;
        case 36:
          genreArray.push("History");
          break;
        case 27:
          genreArray.push("Horror 🧟");
          break;
        case 10402:
          genreArray.push("Music");
          break;
        case 9648:
          genreArray.push("Mystery");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science Fiction 👾");
          break;
        case 10770:
          genreArray.push("TV Movie");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("War");
          break;
        case 37:
          genreArray.push("Western 🤠");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li className='bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded' key={genre}>{genre}</li>)
  };

  const addStorage = () => {
    let storeData = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
    if(!storeData.includes(movie.id.toString())) {
       storeData.push(movie.id);
    window.localStorage.movies = storeData;
      
    } else {
      console.log('already add')
    }
  }

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(","); 
    let newData = storedData.filter((id) => id !== movie.id);

    window.localStorage.movies = newData
  }

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
          <h2 class="text-3xl font-bold overflow-y-hidden h-[2em] hover:overflow-y-visible">{movie.title}</h2>
          <div class="flex  bg-yellow-400 font-bold rounded-xl p-2">{ movie.vote_average > 6 ? movie.vote_average + "💖" : movie.vote_average}</div>
        </div>
        <div>
          <div class="text-lg text-gray-800">      {
        movie.release_date ? (<h5>sortie le : {dateFormatter(movie.release_date) }</h5>) : 'no date'
      }
</div>
        </div>
          <p class=" text-gray-400 max-h-40 overflow-y-hidden hover:rounded hover:overflow-y-visible  hover:z-[1000] hover:p-2 hover:max-h-full hover:bg-gray-100">{movie.overview}</p>
            <ul class="text-sm text-gray-400 inset-x-0 uppercase bottom-0 h-auto flex flex-row overflow-x-auto">{movie.genre_ids ? genreFinder().slice(0, 3) : movie.genres.map((genre, index) => (
              <li className='bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded' key={index}>{ genre.name}</li>
            ))}</ul>  
{movie.genre_ids ? (      <div className='btn flex block text-white bg-gradient-to-br from-pink-500  to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => addStorage()}>Ajouter aux coups de coeur</div>       
            ) : (<div className='btn flex block text-white bg-gradient-to-br from-pink-500  to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => { deleteStorage(); window.location.reload(); }}>Supprimer de la liste</div>       
    )}            
      </div>

        </div>
            
  </div>
  
</div>


  )
}
