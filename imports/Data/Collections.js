	export const Games = new Mongo.Collection('Games');
	export const Players = new Mongo.Collection('Players');

Games.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Players.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
/*
Games.deny({insert: function(userId, game) {
  game.createdAt = new Date().valueOf();
  return false;
}});

Players.deny({insert: function(userId, player) {
  player.createdAt = new Date().valueOf();
  return false;
}});*/