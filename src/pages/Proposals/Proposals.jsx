import './Proposals.css'
import Navbar from '../../components/Navbar/Navbar'
import ProposalsComp from '../../components/ProposalsComp/ProposalsComp'


const Proposals = () => {

  return (
    <div className='proposals-container'>
        <Navbar color={"navbar-white"} />
        <ProposalsComp />
    </div>
  )
}

export default Proposals