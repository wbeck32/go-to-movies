import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './scans_celtic_knot.svg';
import './css/index.css';
import {Search} from './components/Search';
import {Movies} from './components/Movies';
const API_KEY = process.env.REACT_APP_API_KEY;


class App extends Component {

  static propTypes = {
    page: PropTypes.number,
    loading: PropTypes.bool,
    value: PropTypes.string,
    movies: PropTypes.array,
    movie: PropTypes.object,
    searchTerm: PropTypes.string
  }

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
    this.setState({loading: false})
  }

  handleClick({name, value}) {
    console.log('click: ', name, value);
  }

  handleSearch(searchTerm) {
    console.log('in handle: ',searchTerm)
    // this.setState({searchTerm: searchTerm})
    let moviesArray = [];
      for (let i = 1; i <= 10; i++) {
        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&type=movie&page${i}`)
          .then(res => {
            if (res.status === 200) return res.json();
          })
          .then(results => {
            console.log(typeof results, results);
            for (var [key, value] of Object.keys(results.Search)) {
              console.log('results: ',key + ' ' + value, results.Search[0]); // "a 5", "b 7", "c 9"
          }
            //   moviesArray.push(movie);
            // return moviesArray;
          })
          .catch(function(error) {
            console.log('Request failed', error);
          });
          this.setState({movies: moviesArray});
      }
  }

  render() {
    if (this.state.loading)
      return <div>Loading...</div>;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Search onChange={(searchTerm) => this.handleSearch(searchTerm)}/>
          <Movies movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;
