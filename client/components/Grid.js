import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import Square from './Square'
import updateGame from '../actions/update-game'

// Grid for the memory game. Nine squares with an onClick action to show
// the player's symbol, prevent clicking when it's not their turn and ...
class Grid extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    hasTurn: PropTypes.bool.isRequired,
    playerSymbol: PropTypes.string.isRequired,
  }

  // The state for both players changes on toggleTurn
  // Player1 initial state is true => on toggle next state is false => on toggle go to previous state
  // Player2 initial state is false => on toggle next state is true => on toggle go to previous state
  toggleTurn(players) {
    const { hasTurn } = this.props
    return
    // toggle turn player 1 turn = true => turn = false
    // toggle turn player 2 turn = false => turn = true
  }

  // Add:
  // Prevent opponent from clicking -> !hasTurn return nothing
  // It should also make the clicked square unclickable for the rest of the game
  // And change the hasTurn boolean to set the current player to false and next player to true
  handleClick(i) {
    const { currentUser, hasTurn, game, playerSymbol, updateGame, players } = this.props

    const squares = game.squares.slice(0, i) //returns from the whole square array the first one and the selected one and puts them together to be the selected square?
      .concat(playerSymbol) //adds the playerSymbol to the square
      .concat(game.squares.slice(i+1)) //slice -> selected indexnr square + 1 and turns it into a new string
      //Make square unclickable goes here?
      //If has playerSymbol return nothing
    console.log(squares)
    // toggleTurn(players)
    updateGame(game, { squares, players })
  }
  // Renders the square for the game grid, there are nine in total.
  renderSquare(i) {
    const { game } = this.props
    return <Square value={game.squares[i]} onClick={() => this.handleClick(i)} /> // onClick sets the handleClick function in motion for that particular square.
  }

  // Renders the game Grid
  // What does line 39 do? Everthing still seems to work when I comment it out..
  render() {
    console.log(this.props)
    const { hasTurn, playerSymbol } = this.props
    return (
      <div>
        <div className="status">{hasTurn}</div>
        <div className="grid-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="grid-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="grid-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }, { game }) => {
  const { turn, players } = game

  return {
    players: players,
    hasTurn: players[turn] && players[turn].userId === currentUser._id,
    playerSymbol: players[0] && players[0].userId === currentUser._id ? 'X' : 'O',
  }
}

export default connect(mapStateToProps, { updateGame })(Grid)
