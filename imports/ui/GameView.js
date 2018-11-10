import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Create from '../api/Create.js';
//import { CreateGamel } from '../api/Create.js';
//import  commonfunct  from '../api/commonfunct.js';
import { generateAccessCode } from '../api/commonfunct.js';
import { browserHistory, Redirect } from 'react-router';

class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
				pName: '',
				gName: 'quiz',
        gCreated: false,
        game: null
				};

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
    return null;
  }


  render() {

    if (this.state.gCreated === true) {
      return <Redirect to='/lobby' />
      //return <Redirect to=this.state.game.gID />
    }

    return (
		<form id="create-game" onSubmit={this.handleSubmit}>
    <div className="">
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

export default GameView;
