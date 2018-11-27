import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
	export const Games = new Mongo.Collection('Games');
	export const Players = new Mongo.Collection('Players');
  export const Questions = new Mongo.Collection('Questions');
  export const Rounds = new Mongo.Collection('Rounds');
  export const PlayerAnswers = new Mongo.Collection('PlayerAnswers');
});
