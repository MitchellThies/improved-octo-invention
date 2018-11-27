import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { setRoundCategory } from '../api/commonfunct.js';

export default class CategoryView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			game: this.props.game,
			round: this.props.round,
			seconds: 0,
			category: null
			//gQuestion: getQuestion("General Knowledge")
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		[name]: value
		});

		var roundR = setRoundCategory(this.state.round, this.state.category);
		Games.update(this.state.game._id, { $set: {state: "QuestionsView1"}});

  	}

	render () {

		return (
			<div className="Category-select">
			<h3>Please select a Category</h3>
				<button id="game-type" value="General Knowledge" onClick= {this.handleInputChange}
				name="category"> General Knowledge </button>
	      	<button id="game-type" value="Sports" onClick= {this.handleInputChange}
	      	name="category"> Sports </button>
		      <button id="game-type" value="All about Canada" onClick= {this.handleInputChange}
				name="category"> All about Canada </button>
				<button id="game-type" value="Biology & Nature" onClick= {this.handleInputChange}
				name="category"> Biology & Nature </button>
				<button id="game-type" value="Science & technology" onClick= {this.handleInputChange}
				name="category"> Science & technology </button>
				<button id="game-type" value="Entertainment" onClick= {this.handleInputChange}
				name="category"> Entertainment </button>
	      </div>
			)
	}

}