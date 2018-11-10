import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Create from '../api/Create.js';
//import { CreateGamel } from '../api/Create.js';
//import  commonfunct  from '../api/commonfunct.js';
import { generateAccessCode } from '../api/commonfunct.js';
import history from 'history'
//import { browserHistory, Redirect } from 'react-router';
import  browserHistory  from '../ui/routes.js';

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
				pName: '',
				gName: '',
        gCreated: false,
        game: null
				};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.browserHistory = browserHistory;

		//this.createG = new Create();
		//this.obj = new commonfunct();
		//this.gAC = new Session.get('accessCode');
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
		//Meteor.call("generateAccessCode");
		//obj.generateAccessCode();
		//Session.set('accessCode', 32);
		//var gAC = generateAccessCode();
		//var gAC = {generateAccessCode};
		var gAC = generateAccessCode();
		//Session.set('accessCode', gAC);
    //this.props.history.push('/lobby');
    //this.setState({
    //  gCreated: true
    //});
    //browserHistory.push('/lobby');
    //alert('A name was submitted: ' + gAC/*this.state.gName*/);
    event.preventDefault();
		//Create(this.state.pName, this.state.gName);
		//this.createG.verifyCreate(this.state.pName, this.state.gName);
		//Create.verifyCreate(this.state.pName, this.state.gName);
    //return <Create player={this.state.pName} game={this.state.gName}/>;
    var gameCreated = <Create pName={this.state.pName} gName={this.state.gName}/>;
    //this.state.game = 'test';//gameCreated;
      // this.setState({
      //    game: gameCreated
      //  });
    Session.set("gameType", this.state.gName);
		//alert('A name was submitted: ' + gameCreated.accessCode/*this.state.gName*/);
    //Session.set("ID", gameCreated.accessCode)
    //if (gameCreated){
      this.setState({
         gCreated: true,
         game: gameCreated
       });
    //}
    //alert('A name was submitted: ' + this.state.gCreated/*this.state.gName*/);
  }


  render() {

    if (this.state.gCreated === true) {
      //return <Redirect to='/lobby' />
      this.browserHistory.push('/' + this.state.game);//lobby');
      //return <Redirect to=this.state.game.gID />
    }

    return (
		<form id="create-game" onSubmit={this.handleSubmit}>
    <div className="">
      <input type="text" id="player-name" value={this.state.pName} onChange= {this.handleInputChange}
			name="pName" placeholder='enter your name'/>
			<input type="radio" id="game-type" value="quiz-game" onChange= {this.handleInputChange}
			name="gName"/> Quiz Game 
      <input type="radio" id="game-type" value="lying-game" onChange= {this.handleInputChange}
      name="gName"/> Lying Game 
      <div className="button-container">
        <input type="submit" value='Create Game'/>
        <button className="btn-back">back</button>
      </div>
      <h2>{this.state.game} tester {Session.get("gameID")}</h2>
      <h3>{Session.get("playerID")}</h3>
    </div>
  	</form>
    );
  }
};

export default CreateGame;
