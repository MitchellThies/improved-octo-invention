import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { browserHistory } from 'react-router';

class Create extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pName: ''
		};
	}

	static verifyCreate (pName, gName) {
		alert('A name was submitted: ');
	}

  componentDidMount() {
    browserHistory.push('/lobby');
}

/*
	Verify () {
		alert('A name was submitted: ' + this.state.pName);
	}
*/

	render () {
	

		//return (
			alert('A name was submitted: ');
		//);
	};

}

export default Create;
