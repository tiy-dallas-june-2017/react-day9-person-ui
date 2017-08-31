import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      results: [],
      query: ''
    }
  }

  componentDidMount() {
    this.search();
  }

  search() {

    let url = 'http://localhost:4000/search';
    if (this.state.query !== '') {
      url += '?q=' + this.state.query;
    }

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          results: data.results
        })
      });
  }

  handleSearchChange = (evt) => {
    this.setState({
      query: evt.target.value
    }, () => {
      this.search();
    });
  }


  render() {
    return (
      <div>
        <h1>Search component</h1>

        <input placeholder="search" value={this.state.query} onChange={this.handleSearchChange} />

        {this.state.results.map((x) => {
          return <div key={x.id}><Link to={`/person/${x.id}`}>{x.name}</Link></div>
        })}
      </div>
    );
  }

}
