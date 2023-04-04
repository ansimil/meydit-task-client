import { useForm } from "react-hook-form"

const AddProposal = () => {
    const { register } = useForm()
  return (
    <div className="add-proposal-container">
        <form className="add-proposal-form">
            <label htmlFor="">Proposal name</label>
            <input type="text"  />

            <label htmlFor="">Description</label>
            <input type="text" />

            <label htmlFor="">Category</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default AddProposal