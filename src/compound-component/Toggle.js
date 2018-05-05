import React from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

const ToggleOn = ({ on, children }) => on ? children : null
const ToggleOff = ({ on, children }) => on ? null : children
const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />

export default class Toggle extends React.Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  state = { on: false }

  toggle = () => {
    const on = !this.state.on
    this.setState({ on }, () => {
      this.props.onToggle(on)
    })
  }

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      on: this.state.on,
      toggle: this.toggle,
    }))
    return <div>{children}</div>
  }
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
}

Toggle.defaultProps = {
  onToggle: null,
}