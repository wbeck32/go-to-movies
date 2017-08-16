import React, {Component} from 'react';
import logo from './scans_celtic_knot.svg';
import './css/index.css';
import {Search} from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
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

  handleChange({name, value}) {
    console.log('change: ', name, value);

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
            onChange={({target}) => this.handleChange(target)}/>
          <input name="searchValue" value={this.state.searchValue}/>
          //
          <button name="search" onClick={({target}) => this.handleClick(target)}>
            search
          </button>
          {/* <Search category={this.state.category} value={this.state.value}/> */}
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
