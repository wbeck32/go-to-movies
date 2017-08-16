import React, { Component } from 'react';
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
    console.log('__dirName__')

    // this.fetchMovies(this.state.page);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
<div>
 <Search category={this.state.category} value={this.state.value} />
</div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
