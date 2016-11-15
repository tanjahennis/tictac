import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import Grid from './Grid'


class TheGameModel extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-grid">
          <Grid />
        </div>
      </div>
    );
  }
}

export default TheGameModel
