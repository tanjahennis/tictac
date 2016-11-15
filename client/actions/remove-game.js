import model from '../models/game-model'

export const GAME_REMOVED = 'GAME_REMOVED'

export default (game) => {
  return dispatch => {
    model.dispatch = dispatch
    model.app.authenticate()
      .then((response) => {
        console.log('succes in delete-game action:')
        model.destroy(game)
    }).catch((error) => {
      console.log('error in delete-game action:')
      console.log(error)
    })
  }
}

export function deleteGame(game) {
  return {
    type: GAME_REMOVED,
    payload: game
  }
}
