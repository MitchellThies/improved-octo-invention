import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
/*
class Join extends Component {

};

Meteor.methods({
  'join.insert'(text) {
    check(text, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
});*/
