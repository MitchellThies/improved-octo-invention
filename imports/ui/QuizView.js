import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Lobby from './lobby.js';


class QuizView extends Component {
	constructor(props) {
    super(props);
    this.state = {
			pName: '',
			gName: 'quiz',
        	gCreated: false,
        	game: null,
        	status: "waitingForPlayers"
			};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // this.handleInputChange = this.handleInputChange.bind(this);

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

		return (
		<div className='QuizView'>
		<h1>Quiz Game</h1>
		<div>
		<Lobby />
		</div>
		</div>
		)
	}

};

export default QuizView;