import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import Grid from './Grid'


class TheGameModel extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="game">
        <div className="game-grid">
          <Grid game={ this.props.game }/>
        </div>
      </div>
    );
  }
}

export default TheGameModel
