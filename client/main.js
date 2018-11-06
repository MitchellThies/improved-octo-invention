import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/ui/routes.js';
import './main.html';

import App from '../imports/ui/App.js';
//import { Router, browserHistory } from 'react-router';


//
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
//*/
/*
Meteor.startup(() => {
  render(<Router history={browserHistory} routes={routes} />,
	document.getElementById('render-target'));
});
*/
/*Before Router
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

//*/


/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/
