import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Lobby from './lobby.js';
import SplashView from  './SplashView.js';
import QuestionView from './QuestionView.js';
import CategoryView from './CategoryView.js';
import { generateNewRound, getRandomPlayer } from '../api/commonfunct.js';


class QuizView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pName: Session.get("playerName"),
			pID: Session.get("playerID"),
			gName: 'quiz',
			gCreated: false,
			gAC: Session.get("gameCode"),
			game: this.props.game,//null,//Game.findOne({accessCode: this.state.gAC}),
			status: null,
			seconds: 0,
			round: false,
			roundObj: null,
			roundNum: 0
			};
		//this.setState({game: Games.findOne({accessCode: this.state.gAC})});

		this.startGame = this.startGame.bind(this);
		//this.createRound = this.createRound.bind(this);
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
		if (this.state.roundObj === null) {
		var troundObj = generateNewRound(this.state.game, 1, getRandomPlayer(this.state.game));
		this.setState({
			gCreated: true,
			roundObj: troundObj,
			roundNum: 1
		});
	}
	} 
	if (this.state.game.state === "1-round"){
		this.setState({round: true});
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
			if (this.state.roundNum === 1) {


			if (this.state.roundObj.playerSelect === this.state.pID) {
				return(
				<div className='QuizView'>
				<h1>Quiz Game</h1>
				<div>
				<CategoryView game={this.state.game}/>
				</div>
				</div>
				)
			} else {
				return (
				<div className='QuizView'>
				<h1>Quiz Game</h1>
				<div>
				<SplashView message="Waiting for category to be selected" time={50} 
				game={this.state.game}/>
				</div>
				</div>
				)
			}

			if (this.state.round === true) {
				return (
				<div className='QuizView'>
				<h1>Quiz Game</h1>
				<div>
				<QuestionView game={this.state.game}/>
				</div>
				</div>
				)
			} else {
				return (
				<div className='QuizView'>
				<h1>Quiz Game</h1>
				<div>
				<SplashView message="Game starting soon" time={3} game={this.state.game}/>
				</div>
				</div>
				)
			}
		}

		} else {

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