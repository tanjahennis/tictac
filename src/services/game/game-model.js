'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gridSchema = new Schema({
  squares: []
});

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  name: { type: String, required: true },
  location: []
});

const gameSchema = new Schema({
  grid: [gridSchema],
  players: [playerSchema],
  started: { type: Boolean, required: true, 'default': false },
  winner: { type: Boolean, required: false },
  turn: { type: Number, required: true, 'default': 0 },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'user'}
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
