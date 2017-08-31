import React from 'react';

export default class DetailComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      name: 'no name yet',
      skills: [],
      bio: ''
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/detail/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(data);
      });
  }

  render() {

    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>Skills: {this.state.skills.join(', ')}</p>
        <p>{this.state.bio}</p>
      </div>
    )
  }

}
