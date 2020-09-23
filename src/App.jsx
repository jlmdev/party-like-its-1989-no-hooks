import React, { Component } from 'react'
import movieData from './components/batman.json'
import movieData1989 from './components/MoviesFrom1989.json'

// class Movie extends Component {
//   state = movieData

//   render() {
//     return (
//       <div className="movie">
//         <ul>
//           <li className="headline">
//             <h3 className="title">{this.state.title}</h3>
//             <img
//               src={`https://image.tmdb.org/t/p/w92${this.state.poster_path}`}
//               alt="Poster Image"
//             />
//           </li>
//           <li></li>
//           <li className="backdrop">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${this.state.backdrop_path}`}
//               alt="Backdrop Image"
//             />
//           </li>
//           <li className="overview">
//             <p>{this.state.overview}</p>
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }

class App extends Component {
  state = movieData1989

  render() {
    return (
      <>
        <header>
          <h1>Party Like it's 1989!</h1>
        </header>
        <main>
          <div className="movie">
            {this.state.results.map(movie => (
              <ul>
                <li className="headline">
                  <h3 className="title">{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt="Poster Image"
                  />
                </li>
                <li></li>
                <li className="backdrop">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="Backdrop Image"
                  />
                </li>
                <li className="overview">
                  <p>{movie.overview}</p>
                </li>
              </ul>
            ))}
          </div>
        </main>
      </>
    )
  }
}

export default App
