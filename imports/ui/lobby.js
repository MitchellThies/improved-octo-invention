import React, { Component } from 'react';
import Task from './Task.js';
import ScreenSelect from './ScreenSelect.js';
import CreateGame from './CreateGame.js';
import JoinGame from './JoinGame.js';
import Join from '../api/Join.js';
import { Session } from 'meteor/session';
// App component - represents the whole app


export default class Lobby extends React.Component {

  // renderNewGame() {
  // return(
  // <form id="create-game">
  //   <div class="">
  //     <input type="text" id="player-name" name="playerName" placeholder='enter your name'/>
  //     <div class="button-container">
  //       <input type="submit" value='create game'/>
  //       <button class="btn-back">back</button>
  //     </div>
  //   </div>
  // </form>
  // );
  // }

  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.state = { seconds: 0 };
    //this.handleToggleClick = this.handleToggleClick.bind(this);
		// this.handleJGClick = this.handleJGClick.bind(this);
		// this.handleCGClick = this.handleCGClick.bind(this);
		// this.state = { cGame: false};
		// this.state = { jGame: false};
		//this.mainScreen = this.mainScreen.bind(this);
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // handleToggleClick() {
  //   this.setState(prevState => ({
  //     showWarning: !prevState.showWarning
  //   }));
  // }

  // handleJGClick() {
  //   this.setState({ jGame: true });
		// this.setState({ cGame: false });
  // }

  // handleCGClick() {
  //   this.setState({ cGame: true });
		// this.setState({ jGame: false });
  // }

  
  render() {
    var gameID = '"' + Session.get("gameID") + '"';
    var gameType = Session.get("gameType");

    return (
			 <div className="container">
        <header>
          <h1>myPartyGame</h1>
        </header>
        <div>
        Seconds: {this.state.seconds}
        </div>
				<h2>lobby test
        </h2>
        <h3>GameID: {Session.get("gameID")}</h3>
        <h4>gameType: {gameType}</h4>
        <h5>{this.state.game} tester {Session.get("gameID")}</h5>
        <h6>{Session.get("playerID")}</h6>
			</div>

    );
  }
}
