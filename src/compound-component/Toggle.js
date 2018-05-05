import React from 'react'
import Switch from './Switch'

export default class Toggle extends React.Component {
  state = { on: false }

  toggle = on => this.setState({ on }, () => {
    this.props.onToggle(on)
  })

  render() {
    const { on } = this.state
    return <Switch on={on} onClick={this.toggle} />
  }
}
