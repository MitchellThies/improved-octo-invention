import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Lobby from './lobby.js';
import LyingGameView from './LyingGameView.js';

import { assignAssassin, checkPlayerHost } from '../api/commonfunct.js';


class LyingView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pName: Session.get("playerName"),
			pID: Session.get("playerID"),
			gAC: Session.get("gameCode"),
			game: this.props.game,
			init: false,
			ptest: null

		};
	};

	tick() {
		this.setState({game: Games.findOne({_id: this.state.game._id})});

		if (this.state.game.state === "startgame" && 
			this.state.init == false &&
			(checkPlayerHost(this.state.gAC, this.state.pName) == true)) {

			//var tempA = assignAssassin(this.state.game);
			this.setState({init: true,
				ptest: assignAssassin(this.state.game)});
		}
	}

	componentDidMount() {
    	this.interval = setInterval(() => this.tick(), 1000);
  	}

  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}


	render() {
		if(this.state.game.state === "waitingForPlayers") {
			return (
				<div className='LyingView'>
				<h1>Quiz Game</h1>
				<div>
				<Lobby />
				</div>
				</div>
				);
		} else if (this.state.game.state === "startgame") {
			return (
				<div className='LyingView'>
				<LyingGameView game={this.state.game}/>
				</div>
			)
		}
	}
};
export default LyingView;