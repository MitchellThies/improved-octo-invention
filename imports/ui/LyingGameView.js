import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { checkAssassin } from '../api/commonfunct.js';

class LyingGameView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pName: Session.get("playerName"),
			pID: Session.get("playerID"),
			game: this.props.game,
			isAssassin: checkAssassin(Session.get("playerID")),
			seconds: 0

		};
	};

  	tick() {
	    this.setState(prevState => ({
	      seconds: prevState.seconds + 1
	    }));
	}
	componentDidMount() {
    	this.interval = setInterval(() => this.tick(), 1000);
  	}

  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}

	render () {

		if(this.state.seconds < 5) {
			if(this.state.isAssassin == true) {
				return (
					<div> You are the Assassin </div>
				)
			} else {
				return (
					<div> You are hunting the Assassin </div>
				)
			}
		} else {
			return (
				<div> Regular game </div>
			)
		}
	}
};
export default LyingGameView;
