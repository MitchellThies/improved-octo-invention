import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import ScreenSelect from './ScreenSelect.js';
import CreateGame from './CreateGame.js';
import JoinGame from './JoinGame.js';
import Join from '../api/Join.js';
import { Session } from 'meteor/session';
import { checkPlayerHost } from '../api/commonfunct.js';
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
    this.state = {showWarning: true};
    this.state = { seconds: 0 };
    this.state = { gameStart: false};
    this.handleSubmit = this.handleSubmit.bind(this);
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


  // rednerPlayers(){
  //   var gameCode = Session.get("gameCode");
  //   var gameObj = Games.findOne({accessCode: gameCode});
  //   var gameID = gameObj._id;
  //   var playID = Players.find({gameID: gameID});

  //   return filteredTasks.map((task) => {
  //   const currentUserId = this.props.currentUser && this.props.currentUser._id;
  //   const showPrivateButton = task.owner === currentUserId;

  //   return (
  //      <Task
  //        key={task._id}
  //        task={task}
  //        showPrivateButton={showPrivateButton}
  //      />
  //   );
  //   });
  // }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({gameStart: true});
    Session.set("gameStart", true);
    var gameCode = Session.get("gameCode");
    var game = Games.findOne({accessCode: gameCode});

    Games.update(game._id, { $set: {state: "startgame"}});
    
  }

  render() {
    var gameCode = Session.get("gameCode");
    var gameType = Session.get("gameType");
    var gameObj = Games.findOne({accessCode: gameCode});
    var gameID = gameObj._id;
    var playID = Players.find({gameID: gameID});

    const listItems = playID.map((playID) =>
      <li>{playID.name}</li>
    );
    var pName = Session.get("playerName");
    var pHost = checkPlayerHost(gameCode, pName);

    return (
			 <div className="container">
        <div>
        Seconds: {this.state.seconds}
        </div>
        <div className='Players'>
        {listItems}
        </div>
				<h2>lobby test
        </h2>
        <h3>gameCode: {Session.get("gameCode")}</h3>
        <h4>gameType: {gameType} gameID: {gameID}</h4>
        <h5>{this.state.game} tester {Session.get("gameCode")}</h5>
        <h6>{Session.get("playerName")}</h6>
        {pHost ? 
          (<form id="start-game" onSubmit={this.handleSubmit}>
          <div className="start">
          <input type="submit" value='Start Game'/>
          </div>
          </form>
          ) : (<div>{pHost}Waiting for host to start the game</div>)}
        
			</div>

    );
  }
}

/*
             <header>
          <h1>myPartyGame</h1>
        </header>  

        <div className='Players'>
        {this.playID.name}
        </div>
*/