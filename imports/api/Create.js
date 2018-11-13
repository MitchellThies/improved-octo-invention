import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
//import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import { generateAccessCode, generateNewGame, generateNewPlayer } from './commonfunct.js';
//import CreateGame from '../ui/CreateGame.js';

//import { browserHistory, Redirect } from 'react-router';
import  browserHistory  from '../ui/routes.js';
/*
export const CreateGamel = (player, game) => {  
  var pName = player;
  var gName = game;

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    //Session.set("accessCode", code);
    return code;
	};
*/



class Create extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			pName: this.props.pName,
			gName: this.props.gName,
			gID: ''
		};
		this.browserHistory = browserHistory;
	}
/*
	static verifyCreate (pName, gName) {
		alert('A name was submitted: ');
	}
*/


/*
	Verify () {
		alert('A name was submitted: ' + this.state.pName);
	}

*/

	setSession(game, player) {
		Session.set("gameCode", game.accessCode);
      	Session.set("playerID", player._id);
	}

	render () {

		this.state.gID = generateAccessCode();

		var game  = [];
		game = generateNewGame(this.state.gName, this.state.gID);
		var player = generateNewPlayer(game, this.state.pName);
  //   	//browserHistory.push('/lobby');
  		Session.set("gameCode", game.accessCode);
  //     	//setSession(game, player);
  		Session.set("playerID", player.name);
  //     	//Session.set("currentView", "lobby");
  //     	//alert('A name was submitted: ' + Session.get("gameCode")/*this.state.gName*/);
  		this.browserHistory.push(Session.get("gameCode"));
		// //if (true){
		var aCode = game.accessCode;
			return 'game created';
		//}
/*
		return (
			//alert('A name was submitted: ');
	<Redirect to="/lobby"/>
		);*/
	};

}
/*
class Create extends Component {

	render () {
		var bol = true;
		return bol;
	}
};*/

export default Create;
