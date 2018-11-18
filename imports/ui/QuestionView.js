import React, { Component } from 'react';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { getQuestion } from '../api/commonfunct.js';

export default class QuestionView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			game: this.props.game,
			seconds: 0,
			gQuestion: getQuestion("General Knowledge")
		}
	}

	render() {
		//var gQuestion = getQuestion("General Knowledge");//Questions.findOne(/*{category: "General Knowledge"}*/);
		return (
			<div className='QuestionView'>
			<h3>{this.state.gQuestion.questionText}</h3>
			<button id="b1" onClick={this.handleCGClick}>{this.state.gQuestion.answer}</button>
			<button id="b2" onClick={this.handleCGClick}>{this.state.gQuestion.wrong1}</button>
			<button id="b3" onClick={this.handleCGClick}>{this.state.gQuestion.wrong2}</button>
			<button id="b4" onClick={this.handleCGClick}>{this.state.gQuestion.wrong3}</button>
			<li>{this.state.gQuestion.answer}</li>
			<li>{this.state.gQuestion.wrong1}</li>
			<li>{this.state.gQuestion.wrong2}</li>
			<li>{this.state.gQuestion.wrong3}</li>
			</div>
			)
	}
}