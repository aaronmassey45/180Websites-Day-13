import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import Navbar from './navbar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <div className="container">
          <SearchBar/>
        </div>
      </div>
    );
  }
}
