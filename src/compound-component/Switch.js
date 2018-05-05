import React from 'react'
import PropTypes from 'prop-types'
import './CompoundComponent.css'

const Switch = ({on, ...props}) => {
  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
      />
      <button
        className={`toggle-btn ${on ? 'toggle-btn-on' : 'toggle-btn-off'}`}
        aria-expanded={on}
        {...props}
      />
    </div>
  )
}

Switch.propTypes = {
  on: PropTypes.bool,
}
Switch.defaultProps = {
  on: false,
}
export default Switch
