import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

if (Meteor.isServer) {
var dbConnectionSettings = {
	host: "138.197.166.167", 
	port: 3306,
	database: "quiz_database",
	user: "root",
	password: "RabutThies"
};

var db = mysql.createConnection(dbConnectionSettings);

db.connect();

dbConnectionSettings["minInterval"] = 1000;

db.initBinlog(dbConnectionSettings);

var closeAndExit = function() {
  liveDb.end();
  process.exit();
};

// Close connections on hot code push
process.on('SIGTERM', closeAndExit);
// Close connections on exit (ctrl + c)
process.on('SIGINT', closeAndExit);
};

Meteor.methods({
	Meteor.publish('playerScore', function(name){
	  db.select(this, {
	    query: function(esc, escId){
	      return 'select `score` from `players` where `name`=' + esc(name);
	    },
	    triggers: [
	      {
	        table: 'players',
	        condition: function(esc, escId){
	          return '$ROW.name = ' + esc(name);
	        }
	      }
	    ]
	  });
	});

	Meteor.publish('getQuestion', function(category){
	  return db.select(
	      'select `*` from `question` where `category`=' + esc(category)
	      + 'order by `Rand()` limit 1',
	      [ { table: 'question'}]
	    );
	    
	  });
	
});

/*Meteor.publish('getQuestion', function(category){
	  db.select(this, {
	    query: function(esc, escId){
	      return 'select `*` from `question` where `category`=' + esc(category)
	      + 'order by `Rand()` limit 1';
	    },
	    triggers: [
	      {
	        table: 'players',
	        condition: function(esc, escId){
	          return '$ROW.name = ' + esc(name);
	        }
	      }
	    ]
	  });
	});*/