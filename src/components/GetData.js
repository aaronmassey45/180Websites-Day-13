import React, { Component } from 'react';
import $ from 'jquery';

export default class GetData extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      tagline: "",
      overview: "",
      poster: "",
      backdrop: "",
      rating: "",
      runtime: "",
      release: "",
      revenue: ""
    }
  }

  componentWillMount() {

    let url = "https://api.themoviedb.org/3/movie/10897?language=en-US&api_key=b7e2e61e593bea093ce49458ec65f71b";
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        //console.log(data);
          this.setState({
            title: data.title,
            tagline: data.tagline,
            overview: data.overview,
            poster: data.poster_path,
            backdrop: data.backdrop_path,
            rating: data.vote_average,
            runtime: data.runtime,
            release: data.release_date,
            revenue: data.revenue
          });
      }.bind(this)
    });
  }

  componentWillReceiveProps() {
    this.updateMovie();
  }

  updateMovie() {
    let url = "https://api.themoviedb.org/3/search/movie?api_key=b7e2e61e593bea093ce49458ec65f71b&query="+this.props.search;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        console.log(data);
          this.setState({
            title: data.results[0].title,
            tagline: data.results[0].tagline,
            overview: data.results[0].overview,
            poster: data.results[0].poster_path,
            backdrop: data.results[0].backdrop_path,
            rating: data.results[0].vote_average,
            runtime: data.results[0].runtime,
            release: data.results[0].release_date,
            revenue: data.results[0].revenue
          });
      }.bind(this)
    });
    return;
  }

  render() {

    let src = "https://image.tmdb.org/t/p/w500/" + this.state.poster;
    return (
      <div className="GetMovie">
        <div className="row">
          <div className="col-sm-6">
            <img src={src} alt="Movie poster" className="poster img-responsive"/>
          </div>
          <div className="col-sm-6">
            <div className="title gold">{this.state.title}</div>
            <div className="tagline gold">{this.state.tagline}</div>
            <div className="overview">{this.state.overview}</div>
            <div className="row stuff">
              <div className="col-sm-6">
                <div className="gold row">Revenue:</div>
                <div className="row">${this.state.revenue}</div>
              </div>
              <div className="col-sm-6">
                <div className="gold row">Rating:</div>
                <div className="row">{this.state.rating}</div>
               </div>
              <div className="col-sm-6">
                <div className="gold row">Release Date:</div>
                <div className="row">{this.state.release}</div>
               </div>
              <div className="col-sm-6">
                <div className="gold row">Runtime:</div>
                <div className="row">{this.state.runtime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
