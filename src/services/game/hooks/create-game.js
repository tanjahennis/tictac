'use strict';

// src/services/game/hooks/create-game.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const user = hook.params.user;

    // Assign logged in user as creator of the game
    hook.data.userId = user._id;

    // Set up the gridSchema
    const squares = Array(9).fill(null);
    hook.data.squares = squares;

    // Add logged in user as player1
    hook.data.players = [{
      userId: user._id,
      name: user.name,
      picks: []
    }];
  };
};
