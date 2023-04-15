import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './Signup.css'
import { AuthContext } from '../../contexts/auth'

const Signup = () => {
    const { login } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    const submitForm = async (e) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/signup`, e)
        .then( async res => {
          const email = e.email    
          const password = e.password
          const user = {
            email,
            password
          }      
          await login(user)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='signup-container'>
        <div className='signup-inner'>
            <form 
            className='signup-form'
            onSubmit={handleSubmit(submitForm)}
            action="post"
            >
            <h3>Sign up</h3>
            <input
            placeholder='  First Name'
            id="firsName"
            className="text-input-field"
            {...register("firstName")}  
            type="text"  
            />
            <input
            placeholder='  Surname'
            id="surname"
            className="text-input-field"
            {...register("surname")}  
            type="text"  
            />
            <input
            placeholder='  Email'
            id="email"
            className="text-input-field"
            {...register("email")}  
            type="email"  
            />
            <input
            placeholder='  Password'
            className="text-input-field"
            id="password"
            {...register("password")}  
            type="password"  
            />

            <button
            className='btn submit-form-btn'
            type="submit"
            >
            Sign up
            </button>
            </form>

        </div>
    </div>
  )
}

export default Signup