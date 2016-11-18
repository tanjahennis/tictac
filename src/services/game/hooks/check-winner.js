'use strict';

// src/services/game/hooks/check-winner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    // const squares = hook.data.squares;
    // const turn = hook.data.turn;
    // const players = hook.data.players;
    //
    // const lines = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6]
    // ];
    //
    // for (let i = 0; i < lines.length; i++) {
    //   const [a, b, c] = lines[i];
    //   if squares[a] && squares[a] === squares[b] && squares[a] === squares[c] {
    //     return ?? ;
    //   }
    // }
  };
};
