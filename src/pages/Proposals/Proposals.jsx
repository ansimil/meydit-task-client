import './Proposals.css'
import Navbar from '../../components/Navbar/Navbar'
import ProposalsComp from '../../components/ProposalsComp/ProposalsComp'
import { useEffect } from 'react'
import axios from 'axios'

const Proposals = () => {

  return (
    <div className='proposals-container'>
        <Navbar />
        <ProposalsComp />
    </div>
  )
}

export default Proposals