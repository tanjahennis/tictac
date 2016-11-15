import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import './Square.sass'

class Square extends Component {
  constructor() {
    super()
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square
