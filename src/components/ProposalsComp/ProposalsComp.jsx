import React from 'react'
import { Link } from 'react-router-dom'
import './ProposalsComp.css'

const ProposalsComp = () => {
  return (
    <div className='proposals-comp-container'>
      <Link 
      className="add-proposal-btn btn"
      to="/add-proposal"
      >
      Add a proposal
      </Link>
      <div className='proposal-cards-container'>
        
      </div>
    </div>
  )
}

export default ProposalsComp