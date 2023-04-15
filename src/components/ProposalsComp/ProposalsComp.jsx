import { useEffect, useContext } from 'react'
import { ProposalsContext } from '../../contexts/proposals'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ProposalsComp.css'

const ProposalsComp = () => {
  const { proposals } = useContext(ProposalsContext)
  // useEffect(() => {
  //   const authenticate = async () => {
  //     await axios.get(`${process.env.REACT_APP_API_URL}/verify`)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err))
  //   }

  //   authenticate()
    
  // },[])
  return (
    <div className='proposals-comp-container'>
      <div className='add-proposal-btn-container'>
      <Link 
      className="add-proposal-btn btn"
      to="/add-proposal"
      >
      Add a proposal
      </Link>
      </div>
      <div className='proposal-cards-container'>
      {proposals && proposals.map((proposal, i)=> {
        return (
          <div className='proposal-card-container'>
            <h4>{proposal.title}</h4>
            <h4>{proposal.description}</h4>
            <h4>{proposal.category}</h4>
          </div>
        )
      })} 
      </div>
    </div>
  )
}

export default ProposalsComp