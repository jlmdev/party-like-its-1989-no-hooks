import React, { Component } from 'react'

class Movie extends Component {
  state = {
    results: [],
    filter: '',
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=0d4f91e12a85ebe53cbee6c7603388e5'
    )
    const apiJSON = await response.json()
    this.setState(apiJSON)
  }

  handleFilterChange = event => {
    const filterValue = event.target.value
    this.setState({ filter: filterValue })
  }

  render() {
    const filteredMovies = this.state.results.filter(movie =>
      movie.title.includes(this.state.filter)
    )

    return (
      <>
        <header>
          <h1>Party Like it's 1989!</h1>
        </header>
        <section>
          <input onChange={this.handleFilterChange} />
        </section>
        <main>
          {filteredMovies.map(movie => (
            <div className="movie">
              <ul>
                <li className="headline">
                  <h3 className="title">{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                  />
                </li>
                <li></li>
                <li className="backdrop">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </li>
                <li className="overview">
                  <p>{movie.overview}</p>
                </li>
              </ul>
            </div>
          ))}
        </main>
      </>
    )
  }
}

class App extends Component {
  render() {
    return <Movie />
  }
}

export default App
