import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import loadingIcon from "../../assets/images/loading-icon.gif"
import axios from "axios"
import Navbar from "../../components/Navbar/Navbar"
import './AddProposal.css'
import { ProposalsContext } from "../../contexts/proposals"

const AddProposal = () => {
    const { getProposals } = useContext(ProposalsContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const [canReset, setCanReset] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const categories = [
      "Dress",
      "Pants",
      "T-Shirt",
      "Shirt",
      "Hat",
      "Shoes",
    ]

    useEffect(()=> {
      if (!canReset) return;
      reset()
    }, [canReset])

    const submitForm = async (e) => {
      const {proposalName, proposalDescription, proposalCategory} = e
      const formData = new FormData()
      console.log(e)
      formData.append("primaryImgUrl", e.primaryImgUrl[0])
      formData.append("proposalName", proposalName)
      formData.append("proposalDescription", proposalDescription)
      formData.append("proposalCategory", proposalCategory)
      
      setIsLoading(true)
      await axios.post(`${process.env.REACT_APP_API_URL}/add-proposal`, formData)
      .then(() => {
        getProposals()
        setIsLoading(false)
        setCanReset(true)
        navigate('/proposals')
      })
      .catch(err => {
        console.log(err)
        setCanReset(false)
      })
    }

  return (
    <div className="add-proposal-container">
        <Navbar color={"navbar-white"}/>
        <div className="add-proposal-form-container">
          <h3 className="add-proposal-header">Add a proposal</h3>
          <form
          encType="multipart/form-data"
          action="/post"
          method="post"
          className="add-proposal-form"
          onSubmit={handleSubmit(submitForm)}
          >
              <label htmlFor="">Proposal name</label>
              <input
              className="text-input-field"
              {...register("proposalName")}  
              type="text"  
              />

              <label htmlFor="">Description</label>
              <textarea
              className="text-input-field"
              {...register("proposalDescription")}   
              type="textarea" 
              />

              <label htmlFor="">Category</label>
              <select
              className="text-input-field" 
              {...register("proposalCategory")} 
              type="select" 
              >
              {categories.map((category, i) => {
                return (
                  <option key={`proposalCat${i}`} value={category}>{category}</option>
                )
              })}
              </select>

              <input
              className="file-upload-field"
              name="primaryImgUrl"
              id="primaryImgUrl"
              {...register("primaryImgUrl")}  
              type="file"  
              />

              <button
              className="btn submit-form-btn"
              type="submit"
              >
              {isLoading ? 
              <img className="loading-icon" src={loadingIcon} alt="loading" />
               : "Add Proposal"}
              </button>
          </form>
        </div>
    </div>
  )
}

export default AddProposal