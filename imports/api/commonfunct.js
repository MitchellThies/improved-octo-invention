import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
//import Collections from '../Data/Collections.js';

import { browserHistory } from 'react-router';

	/*export const*/ Games = new Mongo.Collection('Games');
	export const Players = new Mongo.Collection('Players');


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
    gameType: gameMode
  };

  var gameID = Games.insert(game);
  game = Games.findOne(gameID);

  return game;
};

export const generateNewPlayer = (game, name) =>{
  var player = {
    gameID: game._id,
    name: name,
    score: null
    //isSpy: false,
    //isFirstPlayer: false
  };

  var playerID = Players.insert(player);

  return Players.findOne(playerID);
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