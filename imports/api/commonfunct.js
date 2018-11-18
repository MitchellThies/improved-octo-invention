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
    host: bHost
    //isSpy: false,
    //isFirstPlayer: false
  };

  var playerID = Players.insert(player);
  Games.update(game._id, { $inc: {players: 1}});

  return Players.findOne(playerID);
};

export const generateNewRound = (game, rNum, pSelect) =>{
	var round = {
		gameID: game._id,
		roundNum: rNum,
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

export const checkPlayerHost = (gameID, pName) =>{
	var player = Players.findOne({accessCode: gameID, name: pName});
	//var player = playerObj;
	if (player.host === true) {
		return true;
	} else {
		return false;
	}
};

export const getQuestion = (cCategory) =>{
	var question = Questions.find({category: cCategory});
	return question;
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
	uRound = Rounds.find(round);
	if (uRound.category === cCategory) {
		return true;
	} else {
		return false;
	}
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
*/