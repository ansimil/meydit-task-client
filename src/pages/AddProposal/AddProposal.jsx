import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import loadingIcon from "../../assets/images/loading-icon.gif"
import axios from "axios"
import Navbar from "../../components/Navbar/Navbar"
import './AddProposal.css'

const AddProposal = () => {
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

    const submitForm = (e) => {
      setIsLoading(true)
      axios.post(`${process.env.REACT_APP_API_URL}/add-proposal`, e)
      .then(res => {
        console.log(res)
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