import PropTypes from 'prop-types'
import { useLocation, Link } from 'react-router-dom'
import Button from './Button'
import { FaArrowLeft, FaTimes, FaPlus } from 'react-icons/fa'

const Header = ({ title, onAdd, showAdd, customClass }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className={customClass}>{title}</h1>
        {location.pathname === '/about' && (
          <Link to='/' className='go-back-button'>
            <FaArrowLeft className='go-back-icon' /> Go Back
          </Link>
        )}
      </div>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : '#ff9900'}
          // text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
          icon={showAdd ? <FaTimes /> : <FaPlus/>}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task',
  customClass: 'judul',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
