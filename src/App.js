import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './scans_celtic_knot.svg';
import './css/index.css';
import { Search } from './components/Search';
import { Movies } from './components/Movies';
import { MovieInfo } from './components/MovieInfo';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  static propTypes = {
    page: PropTypes.number,
    loading: PropTypes.bool,
    value: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.string),
    movie: PropTypes.object,

    searchTerm: PropTypes.string,
    handleSearch: PropTypes.func,
    showInfo: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movie: null,
      page: 1,
      loading: true,
      value: '',
      searchTerm: '',
      selectedMovie: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    this.setState({ loading: false });
  }

  handleClick(target) {
    console.log('click: ', target);
    // this.setState({selectedMovie: target});
  }

  async handleSearch(searchTerm) {
    if (!searchTerm) return;
    searchTerm = encodeURI(searchTerm);
    let moviesArray = [];
    // debounce - slow down requests

    for (let i = 0; i <= 5; i++) {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&type=movie&page=${i}`
      );
      let results = await res.json();
      if (results.Search) {
        // results.Search.forEach(r => {
        moviesArray = moviesArray.concat(results.Search);
        // });
      }
    }
    this.setState({ movies: moviesArray });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie Seeker</h2>
        </div>
        <div>
          <Search onSearch={searchTerm => this.handleSearch(searchTerm)} />
          <MovieInfo />MOVIE
          <button
            className="myButton"
            onClick={({ target }) => this.handleClick(target)}>
            plain
          </button>
          <Movies movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
