import React from 'react'

export default class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      on: this.props.on,
    }
  }
  
  onChange = event => {
    const on = !this.state.on
    this.setState({ on }, () => {
      this.props.onClick(on)
    })
  }

  render() {
    const { on } = this.state
    return <input ref={(input) => { this.switch = input }}  checked={on} onChange={this.onChange} type="checkbox" />
  }
}