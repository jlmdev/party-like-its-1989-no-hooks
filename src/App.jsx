import React, { Component } from 'react'
import movieData from './components/batman.json'
import movieData1989 from './components/MoviesFrom1989.json'

class Movie extends Component {
  state = movieData

  render() {
    return (
      <div className="movie">
        <ul>
          <li className="headline">
            <h3 className="title">{this.state.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w92${this.state.poster_path}`}
              alt="Poster Image"
            />
          </li>
          <li></li>
          <li className="backdrop">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.backdrop_path}`}
              alt="Backdrop Image"
            />
          </li>
          <li className="overview">
            <p>{this.state.overview}</p>
          </li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  // state = {
  //   "popularity":42.011,
  //   "vote_count":5011,
  //   "video":false,
  //   "poster_path":
  //   "\/lH3dsbxA4wLalWKNYpVldX8zfPP.jpg",
  //   "id":268,
  //   "adult":false,
  //   "backdrop_path":"\/2va32apQP97gvUxaMnL5wYt4CRB.jpg",
  //   "original_language":"en",
  //   "original_title":"Batman",
  //   "genre_ids":[28,14],
  //   "title":"Batman",
  //   "vote_average":7.2,
  //   "overview":"Having witnessed his parents' brutal murder as a child, millionaire philanthropist Bruce Wayne fights crime in Gotham City disguised as Batman, a costumed hero who strikes fear into the hearts of villains. But when a deformed madman who calls himself \"The Joker\" seizes control of Gotham's criminal underworld, Batman must face his most ruthless nemesis ever while protecting both his identity and his love interest, reporter Vicki Vale.",
  //   "release_date":"1989-06-23"}

  render() {
    return (
      <>
        <header>
          <h1>Party Like it's 1989!</h1>
        </header>
        <main>
          <Movie />
        </main>
      </>
    )
  }
}

export default App
