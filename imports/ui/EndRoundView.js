import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default class EndRoundView extends React.Component {
	constructor(props){
		super(props);
	}


	render() {
		return (
			<div className="RoundEnd">end of round</div>
			)
	}
}