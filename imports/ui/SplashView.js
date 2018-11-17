import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';


export default class SplashView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
			timeDisplay: this.props.time
		};
	}

	render() {

		return (
			<div className="SplashScreen">
				<h2>SplashScreen here</h2>
				<h6>{this.state.message}</h6>
			</div>
			)
	}

}