import React, { useState, useEffect } from 'react';
import ListItem from './Components/ListItem';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import star from './star.png'

let url = 'https://api.themoviedb.org/3/discover/movie'
let api_key = '30a90ccbb0af0350f28445768c87e2c9'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    fetch(`${url}?api_key=${api_key}&sort_by=popularity.desc&page=1`).
      then(res => res.json())
      .then(response => {
        setMovies(response.results)
        setSelectedMovie(response.results[0])
      })
  }, [])

  const handleClick = (index) => {
    setSelectedMovie(movies[index])
  }

  const infoStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(187, 187, 187,0), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path})`
  }

  return movies.length && (
    <div className="App">
      <div className="Info container text-white text-center align-items-end" style={infoStyle}>
        <div className="font-weight-lighter row">
          <div className="col-6">
            Drama
          </div>
          <div className="col-6">
            {selectedMovie.release_date}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <strong>{selectedMovie.title}</strong>
            <img src={star} alt="star" style={{ maxWidth: 15 }} />
            {selectedMovie.vote_average}
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary px-3">Ver Pelicula</button>
          <button className="btn btn-secondary">Ver Trailer</button>
        </div>
      </div>
      <div className="List">
        {movies.map((movie, index) => {
          return <ListItem key={movie.id}
            index={index}
            average={movie.vote_average}
            date={movie.release_date}
            overview={movie.overview}
            poster={movie.backdrop_path}
            title={movie.title}
            onClick={handleClick}
          />
        })}
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default App;
