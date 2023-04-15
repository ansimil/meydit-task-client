import Login from "../../components/Login/Login"
import Signup from "../../components/Signup/Signup"
import Navbar from "../../components/Navbar/Navbar"
import './Signin.css'

const Signin = () => {
  return (
    <div className="signin-container">
        <Navbar color={"navbar-white"}/>
        <div className="signin-inner">
            <Login />
            <Signup />
        </div>
    </div>
  )
}

export default Signin