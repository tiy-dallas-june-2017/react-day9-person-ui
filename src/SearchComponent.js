import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/search')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          results: data.results
        })
      });
  }


  render() {
    return (
      <div>
        <h1>Search component</h1>

        {this.state.results.map((x) => {
          return <div key={x.id}><Link to={`/person/${x.id}`}>{x.name}</Link></div>
        })}
      </div>
    );
  }

}
