import Navbar from "../../components/Navbar/Navbar"
import HomeComp from "../../components/HomeComp/HomeComp"

const Home = () => {
  return (
    <div className="home-container">
    <Navbar color={"navbar-transparent"} />
    <HomeComp />
    </div>
  )
}

export default Home