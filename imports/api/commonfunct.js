import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { browserHistory } from 'react-router';


 function generateAccessCode(){
  var code = "";
  var possible = "afghijkloqrsuwxy23456789";

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return code;
	}

class commonfunct extends Component {
	constructor(props) {
		super(props);

		this.generateAccessCode = this.generateAccessCode.bind(this);
	}


 generateAccessCode(){
  var code = "";
  var possible = "afghijkloqrsuwxy23456789";

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return code;
	}
}

export default commonfunct;