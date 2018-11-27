import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
//import Collections from '../Data/Collections.js';

import { browserHistory } from 'react-router';

	/*export const*/ Games = new Mongo.Collection('Games');
	/*export const*/ Players = new Mongo.Collection('Players');
	Questions = new Mongo.Collection('Questions');
	Rounds = new Mongo.Collection('Rounds');
	PlayerAnswers = new Mongo.Collection('PlayerAnswers');


 //function generateAccessCode(){
export const generateAccessCode = () => {  
  var code = "";
  var possible = "afghijkloqrsuwxy23456789";

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    //Session.set("accessCode", code);
    return code;
	};


/*
Lying game functions
*/
export const assignAssassin = (game) =>{
	var pList = [];
	var pList = Players.find({gameID: game._id});
	var i = pList.length - 1;
	var j = Math.floor(Math.random() * (i + 1));

	Players.update(pList[j]._id, { $set: {isAssassin: true}});
	return pList[j];
};

export const checkAssassin = (pID) =>{
	var pObj = Players.findOne({_id: pID});
	return pObj.isAssassin;
};


export const generateNewGame = (gameMode, gID) =>{
  var game = {
    accessCode: gID,
    state: "waitingForPlayers",
    //location: null,
    //lengthInMinutes: roundMinutes || 8,
    endTime: null,
    paused: false,
    pausedTime: null,
    gameType: gameMode,
    roundNum: 0,
    players: 0
  };

  var gameID = Games.insert(game);
  game = Games.findOne(gameID);

  return game;
};

export const generateNewPlayer = (game, name, bHost) =>{
  var player = {
    gameID: game._id,
    accessCode: game.accessCode,
    name: name,
    score: null,
    host: bHost,
    isAssassin: false,
    isDead: false
    //isSpy: false,
    //isFirstPlayer: false
  };

  var playerID = Players.insert(player);
  Games.update(game._id, { $inc: {players: 1}});

  return Players.findOne(playerID);
};

export const generateNewRound = (game, rNum, pSelect) =>{
	if (rNum === 1 || rNum === 3 || rNum === 5){
		var qNum = 3;
	} else {
		var qNum = 4;
	}
	var round = {
		gameID: game._id,
		roundNum: rNum,
		numQuestions: qNum,
		playerSelect: pSelect,
		category: null,
		Question1: null,
		Question2: null,
		Question3: null,
		Question4: null
	};
	var roundID = Rounds.insert(round);

	return Rounds.findOne(roundID);
};

export const generateNewPlayerAnswers = (game, round, playerID) =>{
	// if (rNum === 1 || rNum === 3 || rNum === 5){
	// 	var qNum = 3;
	// } else {
	// 	var qNum = 4;
	// }
	var pAnswers = {
		gameID: game._id,
		roundID: round._id,
		roundNum: round.roundNum,
		numQuestions: round.numQuestions,
		player: playerID,
		pReady: false,
		//category: null,
		Question1: null,
		Question2: null,
		Question3: null,
		Question4: null
	};
	var pAnswersID = PlayerAnswers.insert(pAnswers);

	return PlayerAnswers.findOne(pAnswersID);
};


export const checkPlayerHost = (gameID, pName) =>{
	var player = Players.findOne({accessCode: gameID, name: pName});
	//var player = playerObj;
	if (player.host === true) {
		return true;
	} else {
		return false;
	}
};

export const checkPlayersReady = (game, round) =>{
	var playersReady = PlayerAnswers.count({roundID: round._id, pReady: true});
	if (playersReady === getPlayerCount(game))
		return true;
	else
		return false;

};

//export 
const setPlayersReady = (pAnswer, status) =>{
PlayerAnswers.update(pAnswer._id, { $set: {pReady: status}});
};

export const getQuestion = (questionID) =>{
	var question = Questions.findOne({_id: questionID});
	return question;
};

export const getQuestionID = (cCategory) =>{
	var question = Questions.findOne({category: cCategory});
	return question._id;
};

export const getRandomPlayer = (game) =>{
	//requires more work
	//var listPlayers = [];
	//listPlayers = Players.find({gameID: game._id});
	var listPlayers = Players.findOne({gameID: game._id});
	return listPlayers._id;
};

export const getPlayerCount = (game) =>{
	var pCount = Players.count({gameID:_id});
	return pCount;
};

export const setRoundCategory = (round, cCategory) =>{
	Rounds.update(round._id, { $set: {category: cCategory}});
	//uRound = 
	return Rounds.find(round);
	// if (uRound.category === cCategory) {
	// 	return true;
	// } else {
	// 	return false;
	// }
};

export const setRoundQuestions = (round) =>{
	if (round.numQuestions === 3) {
		var q1 = getQuestionID(round.category);
		var q2 = getQuestionID(round.category);
		var q3 = getQuestionID(round.category);

		Rounds.update(round._id, { $set: {Question1: q1, Question2: q2, Question3: q3}})
		return Rounds.findOne(round._id);
	} else {
		var q1 = getQuestionID(round.category);
		var q2 = getQuestionID(round.category);
		var q3 = getQuestionID(round.category);
		var q4 = getQuestionID(round.category);

		Rounds.update(round._id, { $set: {Question1: q1, Question2: q2, Question3: q3, Question4: q4}})
		return Rounds.findOne(round._id);
	}
};

export const setNextRound = (game, round) =>{
	Games.update(game, { $inc: {roundNum: 1}});
	uGame = Games.findOne(game);
	var nRound = generateNewRound(game, uGame.roundNum, getRandomPlayer(game));
	return nRound;
};

export const setPlayerAnswer = (pAnswer, pAnswerObj, qNum) =>{
	if (qNum === 1)
		PlayerAnswers.update(pAnswerObj, { $set: {Question1: pAnswer}});
	else if (qNum === 2)
		PlayerAnswers.update(pAnswerObj, { $set: {Question2: pAnswer}});
	else if (qNum === 3)
		PlayerAnswers.update(pAnswerObj, { $set: {Question3: pAnswer}});
	else if (qNum === 4)
		PlayerAnswers.update(pAnswerObj, { $set: {Question4: pAnswer}});
	return PlayerAnswers.findOne(pAnswerObj); //{_id: pAnswerObj._id});

};

export const getNextQuestion = (qNum, round) =>{
	if (qNum === 0)
		return getQuestion(round.Question1);
	if (qNum === 1)
		return getQuestion(round.Question2);
	if (qNum === 2)
		return getQuestion(round.Question3);
	if (qNum === 3)
		return getQuestion(round.Question4);
	return null;
};

/*
class commonfunct extends Component {
	constructor(props) {
		super(props);

		this.generateAccessCode = this.generateAccessCode.bind(this);
	}


 generateAccessCode(){
  var code = "";
  var possible = "afghijkloqrsuwxy23456789";

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return Session.set("accessCode", code);//code;
	}
}

export default commonfunct;

db.Rounds.update({_id: 'wMtHrFr3AXa6Lvn8Z', {$set: {category: "General Knowledge"}}})


*/