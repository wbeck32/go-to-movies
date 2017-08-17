import React, {Component} from 'react';
import logo from './scans_celtic_knot.svg';
import './css/index.css';
import {Search} from './components/Search';
import {Movies} from './components/Movies';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      movie: {},
      page: 1,
      loading: true,
      category: 'title',
      value: 'Star Wars'
    };
  }

  componentDidMount() {
    console.log('mounted');

    // this.fetchMovies(this.state.page);
  }

  handleClick({name, value}) {
    console.log('click: ', name, value);
  }

  handleAutoComplete({name, value}) {
    console.log('change: ', name, value);
    // console.log('key: `${process.env.API_KEY}`')
    let movieId = 'tt1285016';
    let url = 'http://www.omdbapi.com/'

    function json(response) {
      return response.json()
    }

    fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
        body: 'apikey=3db77742&i=tt1285016'
      })
      .then(json)
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
    // .catch(function (error) {   console.log('Request failed', error); });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div>
          <input
            name="searchCategory"
            value={this.state.searchCategory}
            onChange={({target}) => this.handleAutoComplete(target)}/>
          <input name="searchValue" value={this.state.searchValue}/>
          <button name="search" onClick={({target}) => this.handleClick(target)}>
            search
          </button>
          {/* <Search category={this.state.category} value={this.state.value}/> */}
        </div>
      </div>
    );
  }
}

export default App;
