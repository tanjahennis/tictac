import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import Square from './Square'
import updateGame from '../actions/update-game'

class Grid extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    hasTurn: PropTypes.bool.isRequired,
    playerSymbol: PropTypes.string.isRequired,
  }

  handleClick(i) {
    const { hasTurn, game, playerSymbol, updateGame } = this.props
    // TODO: ignore if player not hasTurn
    const squares = game.squares.slice(0, i)
      .concat(playerSymbol)
      .concat(game.squares.slice(i+1))
    console.log(squares)
    updateGame(game, { squares })
  }

  renderSquare(i) {
    const { game } = this.props
    return <Square value={game.squares[i]} onClick={() => this.handleClick(i)} />
  }

  render() {
    console.log(this.props)
    const { hasTurn, playerSymbol } = this.props
    // const status = 'Next player: X'
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
    );
  }
}

const mapStateToProps = ({ currentUser }, { game }) => {
  const { turn, players } = game

  return {
    hasTurn: players[turn] && players[turn].userId === currentUser._id,
    playerSymbol: turn === 0 ? 'X' : 'O'
  }
}

export default connect(mapStateToProps, { updateGame })(Grid)
