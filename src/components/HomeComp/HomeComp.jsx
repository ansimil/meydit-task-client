import './HomeComp.css'
import { Link } from 'react-router-dom'

const HomeComp = () => {
  return (
    <div className="home-component-container">
    <Link 
    className='home-component__proposals-btn'
    >
    Check out the proposals</Link>
    </div>
  )
}

export default HomeComp