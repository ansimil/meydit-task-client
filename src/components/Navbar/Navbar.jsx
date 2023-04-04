import { Link } from "react-router-dom"
import icon from '../../assets/images/white_logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-left-container navbar-section">
            <Link
            className="main-icon" 
            to={"/"}
            >
            <img src={icon} alt="main-icon" />
            </Link>
        </div>
        <div className="navbar-middle-container navbar-section">
            <Link
            to={"/proposals"}
            className="navbar-btn" 
            >
            Proposals
            </Link>
        </div>
        <div className="navbar-right-container navbar-section">
            <Link
            className="navbar-btn"
            >
            Sign in
            </Link>
        </div>
    </div>
  )
}

export default Navbar