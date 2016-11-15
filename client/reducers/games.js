export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case 'GAMES_FETCHED' :
      return [].concat(payload)

    case 'GAME_CREATED' :
      return [payload].concat(state)

    case 'GAME_UPDATED' :
      return state.map((game) => {
        return game._id === payload._id ? payload : game
      })

    case 'GAME_REMOVED' :
      const removed = payload
      return state.filter((game) => (game._id !== current._id))

    default :
      return state
  }
}
