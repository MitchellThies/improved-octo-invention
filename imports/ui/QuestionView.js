import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
//import { getQuestion } from '../api/commonfunct.js';
import SplashView from  './SplashView.js';
import { generateNewPlayerAnswers, getQuestion, 
	setPlayerAnswer, getNextQuestion, checkPlayersReady } from '../api/commonfunct.js';
import { Session } from 'meteor/session';

export default class QuestionView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			game: this.props.game,
			round: this.props.round,
			seconds: 0,
			qNum: 1, //this.props.qNum,
			pID: Session.get("playerID"),
			//gQuestion: getQuestionID(this.),
			pAnswerObj: generateNewPlayerAnswers(this.props.game, this.props.round, Session.get("playerID")),
			pAnswer: null,
			pReady: false,
			pAnswerObj: null
		};
		
		//var sQuest = new MysqlSubscription('getQuestion', 'General Knowledge');

		this.handleClick = this.handleClick.bind(this);
		this.tick = this.tick.bind(this);
		
		//var playerAnswersObj = generateNewPlayerAnswers(this.state.game, this.state.round, this.state.pID);
    	//this.state = {pAnswerObj: playerAnswersObj};

		this.state = {gQuestion: Questions.findOne({_id: 1})};//getNextQuestion(this.state.qNum, this.state.round)};
	}

	//state = {qNum: 1};

	tick() {
		// this.setState(prevState => ({
  //     	seconds: prevState.seconds + 1
  //   	}));

		//this.setState({pReady: checkPlayersReady(this.state.game, this.state.round)});

    	if (this.state.pAnswer != null) {
    		var newpAnswerObj = setPlayerAnswer(this.state.pAnswer, this.state.pAnswerObj, this.state.qNum)
    		this.setState({gQuestion: getNextQuestion(this.state.qNum, this.state.round)});
    		if (checkPlayersReady(this.state.game, this.state.round)) {
    			this.setState({pAnswer: null});
    		}
    		this.setState(prevState =>({
    			//qNum: prevState.qNum + 1,
    			pAnswerObj: newpAnswerObj
    			//pAnswer: null
    		}));
    	}
	}

	handleClick (event) {
		const target = event.target;
		const value = target.value;

		this.setState({pAnswer: value});

		PlayerAnswers.update(this.state.pAnswerObj._id, { $set: {pReady: true}});

		// var newpAnswerObj = setPlayerAnswer(this.state.pAnswer, this.state.pAnswerObj, this.state.qNum)
  //   	this.setState({gQuestion: getNextQuestion(this.state.qNum, this.state.round)});
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);

		// var playerAnswersObj = generateNewPlayerAnswers(this.state.game, this.state.round, this.state.pID);
  //   	this.state = {pAnswerObj: playerAnswersObj};
  	}

  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}

	render() {
		//var gQuestion = getQuestion("General Knowledge");//Questions.findOne(/*{category: "General Knowledge"}*/);
		if (this.state.pAnswer == null && this.state.qNum != 1) {
		return (
			<div className='QuestionView'>
			<h3>Question {this.state.qNum}: {this.state.gQuestion.questionText}</h3>
				<button id="b1" onClick={this.handleClick} value={this.state.gQuestion.answer}>
				{this.state.gQuestion.answer}</button>
				<button id="b2" onClick={this.handleClick} value={this.state.gQuestion.wrong1}>
				{this.state.gQuestion.wrong1}</button>
				<button id="b3" onClick={this.handleClick} value={this.state.gQuestion.wrong2}>
				{this.state.gQuestion.wrong2}</button>
				<button id="b4" onClick={this.handleClick} value={this.state.gQuestion.wrong3}>
				{this.state.gQuestion.wrong3}</button>
			</div>
			)
		}

		//if (this.state.pAnswer == null) {
		if (this.state.pAnswer == null && this.state.pReady == true) {
		return (
			<div className='QuestionView'>
			<h3>{this.state.gQuestion.questionText}</h3>
				<button id="b1" onClick={this.handleClick} value={this.state.gQuestion.answer}>
				{this.state.gQuestion.answer}</button>
				<button id="b2" onClick={this.handleClick} value={this.state.gQuestion.wrong1}>
				{this.state.gQuestion.wrong1}</button>
				<button id="b3" onClick={this.handleClick} value={this.state.gQuestion.wrong2}>
				{this.state.gQuestion.wrong2}</button>
				<button id="b4" onClick={this.handleClick} value={this.state.gQuestion.wrong3}>
				{this.state.gQuestion.wrong3}</button>
			</div>
			)
		} else {
			return (
				<div>Waiting for other Players to answer</div>)
			
		}
	}
}
/*
			<li>{this.state.gQuestion.answer}</li>
			<li>{this.state.gQuestion.wrong1}</li>
			<li>{this.state.gQuestion.wrong2}</li>
			<li>{this.state.gQuestion.wrong3}</li>


			return(
			<SplashView message="Waiting for other players to answer" time={100} 
			game={this.state.game}/>
			)
*/