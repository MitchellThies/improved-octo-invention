import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Session } from 'meteor/session';
import { generateNewPlayer } from './commonfunct.js';
//import CreateGame from '../ui/CreateGame.js';

//import { browserHistory, Redirect } from 'react-router';
import  browserHistory  from '../ui/routes.js';

class Join extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      pName: this.props.pName,
      rName: this.props.rName,
      gID: ''
    };
    this.browserHistory = browserHistory;
  }
/*
  static verifyCreate (pName, gName) {
    alert('A name was submitted: ');
  }
*/

  setSession(game, player) {
    Session.set("gameCode", game.accessCode);
        Session.set("playerID", player._id);
  }

  render () {

    //this.state.gID = generateAccessCode();

    var game  = [];
    game = Games.findOne({accessCode: this.state.rName})


    var player = generateNewPlayer(game, this.state.pName, false);
  //    //browserHistory.push('/lobby');
      Session.set("gameCode", game.accessCode);
  //      //setSession(game, player);
      Session.set("playerID", player.name);
  //      //Session.set("currentView", "lobby");
  //      //alert('A name was submitted: ' + Session.get("gameCode")/*this.state.gName*/);
    this.browserHistory.push(Session.get("gameCode"));
    // //if (true){
    var aCode = game.accessCode;
      return 'Joined game';
    //}

    
  };

}


export default Join;

/*
Meteor.methods({
  'join.insert'(text) {
    check(text, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
});*/
