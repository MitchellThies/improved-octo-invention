import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';

import { browserHistory } from 'react-router';


 //function generateAccessCode(){
export const generateAccessCode = () => {  
  var code = "";
  var possible = "afghijkloqrsuwxy23456789";

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    //Session.set("accessCode", code);
    return code;
	};

/*
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
    
    return Session.set("accessCode", code);//code;
	}
}

export default commonfunct;
*/