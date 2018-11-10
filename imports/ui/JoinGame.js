import React, { Component } from 'react';

//import Join from '../api/Join.js';

class JoinGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
				pName: '',
				rName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.rName);
    event.preventDefault();
  }


  render() {
    return (
		<form id="join-game" onSubmit={this.handleSubmit}>
    <div class="">
      <input type="text" id="player-name" value={this.state.pName} onChange={this.handleInputChange}		
			name="pName" placeholder='enter your name'/>
      <input type="text" id="room-name" value={this.state.rName} onChange= {this.handleInputChange}		
			name="rName" placeholder='enter the room name'/>
      <div class="button-container">
        <input type="submit" value="Join Game"/>
        <button class="btn-back">Back</button>
      </div>
    </div>
  	</form>
    );
  }
}

export default JoinGame;
