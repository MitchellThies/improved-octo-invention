import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
//import Countdown from 'react-countdown-now';


export default class SplashView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
			//timeDisplay: this.props.time,
			game: this.props.game,
			seconds: this.props.time,
			exitSS: false
		};

		this.pageChange = this.pageChange.bind(this);
	}

	tick() {
		if (this.state.seconds != 0) {
    this.setState(prevState => ({
      seconds: prevState.seconds - 1
    }));
 	} else {
 		this.setState({exitSS: true});
 		Games.update(this.state.game._id, { $set: {state: "1-round"}});
 	}
  	}

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  	}

  componentWillUnmount() {
    clearInterval(this.interval);
  	}

	pageChange() {
		this.setState({exitSS: true});
		
	}

	render() {
		//var countD = <Countdown date={Date.now() + 5000} />;
		//if (this.state.seconds === 0){
		if (this.state.exitSS === true) {//does not work
			this.pageChange;
		
		}

		return (
			<div className="SplashScreen">
				<h2>SplashScreen here</h2>
				<h6>{this.state.message}</h6>
			</div>
			)
	}

}

/*
<Countdown date={date.now() + this.state.timeDisplay}>
					{this.pageChange}
				</Countdown>
*/