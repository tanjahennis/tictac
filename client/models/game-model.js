import BaseModel from 'feathersjs-redux-model/build/models/base-model'
import feathers from 'feathers-client'

class GameModel extends BaseModel {
  defaults() {
    return {
      grid: [],
      players: [],
      started: false,
      winner: null,
      turn: 0,
      createdAt: Date.now,
      updatedAt: Date.now,
    };
  }
  //What is this?
  findParams() {
    return {
      query: {
        $sort: { createdAt: -1 },
        $limit: 10
      }
    };
  }
  //What is this?
  constructor(dispatch, onError) {
    super('game', dispatch, onError);
    this.app.configure(feathers.authentication({
      type: 'local',
      storage: window.localStorage,
    }))
  }
}

const gameModel = new GameModel()

export default gameModel
