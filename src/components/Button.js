import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
      {icon && <span className='button-icon'>{icon}</span>}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
}

export default Button
