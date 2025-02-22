import React, { Component } from 'react'

export default class DelayedButton extends Component {
  render() {
    return <button onClick={this.handleClick} ></button>
  }

  handleClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
    // setTimeout(this.props.onDelayedClick(e), this.props.delay)
  }
}
