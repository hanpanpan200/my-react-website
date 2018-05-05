import React from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

export default class Toggle extends React.Component {
  state = { on: false }

  toggle = () => {
    const on = !this.state.on
    this.setState({ on }, () => {
      this.props.onToggle(on)
    })
  }

  render() {
    const { on } = this.state
    return <Switch on={on} onClick={this.toggle} />
  }
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
}

Toggle.defaultProps = {
  onToggle: null,
}