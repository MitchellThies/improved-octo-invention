import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Lobby from './lobby.js';
import SplashView from  './SplashView.js';


class QuizView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pName: Session.get("playerID"),
			gName: 'quiz',
			gCreated: false,
			gAC: Session.get("gameCode"),
			game: null,//Game.findOne({accessCode: this.state.gAC}),
			status: null,
			seconds: 0
			};
		//this.setState({game: Games.findOne({accessCode: this.state.gAC})});

		this.startGame = this.startGame.bind(this);
	 // this.handleChange = this.handleChange.bind(this);
	 // this.handleSubmit = this.handleSubmit.bind(this);

	 // this.handleInputChange = this.handleInputChange.bind(this);

  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
   this.setState({game: Games.findOne({accessCode: this.state.gAC}) });
	if (this.state.game.state === "startgame"){
		this.setState({gCreated: true});
	} 
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startGame() {
	this.setState({game: Games.findOne({accessCode: this.state.gAC}) });
	if (this.state.game.state === "startgame"){
		this.setState({gCreated: true});
		return true;
	} else {
		return false;
	}

  }


	render () {

	// if (this.state.status == "waitingForPlayers") {
	//   return (
	//     <div className="container">
	//         <header>
	//           <h1>myPartyGame</h1>
	//         </header>
		  
	//         <Lobby />
	//     </div>
	//     )
	// }

	this.startgame;

		//if ({this.state.game.status} == "startgame"){
		//if (this.startGame === true){
		var gst = Session.get("gameStart");
		if (this.state.gCreated === true){
		//if ()
			return (
				<div className='QuizView'>
				<h1>Quiz Game</h1>
				<div>
				<SplashView message="testing" time='5'/>
				</div>
				</div>
			)
		}else{

			return (
				<div className='QuizView'>
				<h1>Quiz Game</h1>
				<div>
				time: {this.state.seconds}<br/>
				gCreated: {this.state.gCreated.toString()}<br/>
				Session gCreated: {gst}
				<Lobby />
				</div>
				</div>
			)
		}
	}

};

export default QuizView;