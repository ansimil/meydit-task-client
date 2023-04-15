import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import axios from "axios"
import icon from '../../assets/images/white_logo.png'
import './Navbar.css'

const LogoutBtn = () => {
  const { logOutUser } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <button
    className="navbar-btn btn"
    onClick={ async () => {
      const storedToken = localStorage.getItem('meyd-itAuthToken')        
      await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
      .then(async res => {
        if (res.data.revoked) {
          await logOutUser()
          navigate('/')
        }
      })
      .catch(err => console.log(err)) 
    }}
    >
    Logout
    </button>
  )
}

const Navbar = ({color}) => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <div className={`navbar-container ${color}`}>
        <div className="navbar-left-container navbar-section">
            <Link
            className="main-icon" 
            to="/"
            >
            <img src={icon} alt="main-icon" />
            </Link>
        </div>
        <div className="navbar-middle-container navbar-section">
            <Link
            to="/proposals"
            className="navbar-btn" 
            >
            Proposals
            </Link>
        </div>
        <div className="navbar-right-container navbar-section">
          {!isLoggedIn ? <Link
          to="/signin"
          className="navbar-btn"
          >
          Sign in
          </Link> :
          <LogoutBtn />}
        </div>
    </div>
  )
}

export default Navbar