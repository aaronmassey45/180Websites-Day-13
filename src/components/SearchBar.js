import React, { Component } from 'react';
import GetData from './GetData';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    var search = event.target.value;
    this.setState({search: search});
  }
}

  render() {
    return (
      <div>
        <div className="SearchBar">
          <div className="row">
            <div className="col-sm-4">
              <a href="https://www.themoviedb.org/">
                <p>Powered by</p>
                <p>The Movie Db</p>
              </a>
            </div>
            <div className="col-sm-8">
              <input id="search" type="text" placeholder="Search Movie Titles..." onKeyPress={this.handleKeyPress}/>
            </div>
          </div>
        </div>
        <GetData search={this.state.search}/>
      </div>
    );
  }
}
