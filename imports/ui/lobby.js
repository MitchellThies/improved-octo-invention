import React, { Component } from 'react';
import Task from './Task.js';
import ScreenSelect from './ScreenSelect.js';
import CreateGame from './CreateGame.js';
import JoinGame from './JoinGame.js';
import Join from '../api/Join.js';
// App component - represents the whole app


export default class Lobby extends React.Component {

  renderNewGame() {
  return(
  <form id="create-game">
    <div class="">
      <input type="text" id="player-name" name="playerName" placeholder='enter your name'/>
      <div class="button-container">
        <input type="submit" value='create game'/>
        <button class="btn-back">back</button>
      </div>
    </div>
  </form>
  );
  }

  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    //this.handleToggleClick = this.handleToggleClick.bind(this);
		this.handleJGClick = this.handleJGClick.bind(this);
		this.handleCGClick = this.handleCGClick.bind(this);
		this.state = { cGame: false};
		this.state = { jGame: false};
		//this.mainScreen = this.mainScreen.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  handleJGClick() {
    this.setState({ jGame: true });
		this.setState({ cGame: false });
  }

  handleCGClick() {
    this.setState({ cGame: true });
		this.setState({ jGame: false });
  }

  
  render() {


    return (
			 <div className="container">
        <header>
          <h1>myPartyGame</h1>
        </header>

				<h2>lobby test
        </h2>
			</div>

    );
  }
}
