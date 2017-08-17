import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './scans_celtic_knot.svg';
import './css/index.css';
import { Search } from './components/Search';
import { Movies } from './components/Movies';
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  static propTypes = {
    page: PropTypes.number,
    loading: PropTypes.bool,
    value: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.string),
    movie: PropTypes.object,
    searchTerm: PropTypes.string,
    handleSearch: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movie: null,
      page: 1,
      loading: true,
      value: '',
      searchTerm: 'h'
    };
  }

  componentDidMount() {
    console.log('mounted');
    this.setState({ loading: false });
  }

  handleClick({ name, value }) {
    console.log('click: ', name, value);
  }



  async handleSearch(searchTerm) {
    if (!searchTerm) return;
    let moviesArray = [];
    // debounce - slow down requests

    for (let i = 0; i <= 10; i++ ) {
      const res = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&type=movie&page=${i}`);
      let results = await res.json();
      if(results.Search) {

      results.Search.forEach(r =>{
        // console.log(r, typeof r)
        moviesArray = moviesArray.concat(r);
      })
    }

  }
    this.setState({movies: moviesArray})
    }


  render() {
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Search onSearch={searchTerm => this.handleSearch(searchTerm)} />
          <Movies movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
