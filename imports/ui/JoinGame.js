import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import history from 'history'
import  browserHistory  from '../ui/routes.js';

import Join from '../api/Join.js';

class JoinGame extends Component {
  constructor(props) {
	 super(props);
	 this.state = {
			pName: '',
			rName: '',
			gCreated: false,
			gID: null,
			game: null};

	 this.handleChange = this.handleChange.bind(this);
	 this.handleSubmit = this.handleSubmit.bind(this);

	 this.handleInputChange = this.handleInputChange.bind(this);
	 this.browserHistory = browserHistory;
	 this.pageChange = this.pageChange.bind(this);
  }

  handleChange(event) {
	 this.setState({value: event.target.value});
  }

  handleInputChange(event) {
	 const target = event.target;
	 const value = target.type === 'checkbox' ? target.checked : target.value;
	 const name = target.name;

	 this.setState({
		[name]: value
	 });
  }

	handleSubmit(event) {
	 
		var gameJoined = <Join pName={this.state.pName} rName={this.state.rName}/>;

	  	this.setState({
         gCreated: true,
         game: gameJoined
      });

	  	this.pageChange();
    	this.browserHistory.push(Session.get("gameCode"));

		//alert('A name was submitted: ' + this.state.rName);
		//event.preventDefault();
  }


  pageChange(){
    //this.browserHistory.push(Session.get("gameCode"));
    this.setState({gID: Session.get("gameCode")});
  }

  	render() {

  		if (this.state.gCreated === true) {
      //return <Redirect to='/lobby' />
      //this.browserHistory.push(Session.get("gameCode"));//lobby');
      {this.pageChange};
      //return 'loading';
      //return <Redirect to=this.state.game.gID />
    }
	 return (
		<form id="join-game" onSubmit={this.handleSubmit}>
	 <div className="">
		<input type="text" id="player-name" value={this.state.pName} onChange={this.handleInputChange}		
			name="pName" placeholder='enter your name'/>
		<input type="text" id="room-name" value={this.state.rName} onChange= {this.handleInputChange}		
			name="rName" placeholder='enter the room name'/>
		<div className="button-container">
		  <input type="submit" value="Join Game"/>
		  <button className="btn-back">Back</button>
		</div>
		<h2>{this.state.game} {Session.get("gameCode")}</h2>
      <h3>{Session.get("playerID")}</h3>
	 </div>
	</form>
	 );
  }
}

export default JoinGame;
