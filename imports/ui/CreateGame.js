import React, { Component } from 'react';

import Create from '../api/Create.js';
import { commonfunct } from '../api/commonfunct.js';

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
				pName: ''
				//gName: ''
				};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);

		//this.createG = new Create();
		//this.obj = new commonfunct();
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
    alert('A name was submitted: ' + commonfunct.generateAccessCode()/*this.state.gName*/);
    event.preventDefault();
		//Create(this.state.pName, this.state.gName);
		//this.createG.verifyCreate(this.state.pName, this.state.gName);
		//Create.verifyCreate(this.state.pName, this.state.gName);
  }


  render() {
    return (
		<form id="create-game" onSubmit={this.handleSubmit}>
    <div class="">
      <input type="text" id="player-name" value={this.state.pName} onChange= {this.handleInputChange}
			name="pName" placeholder='enter your name'/>
			<input type="radio" id="game-type" value="quiz-game" onChange= {this.handleInputChange}
			name="gName"/> Quiz Game 
      <div class="button-container">
        <input type="submit" value='Create Game'/>
        <button class="btn-back">back</button>
      </div>
    </div>
  	</form>
    );
  }
};

export default CreateGame;
