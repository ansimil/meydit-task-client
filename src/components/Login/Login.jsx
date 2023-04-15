import { useForm } from 'react-hook-form'
import { useState, useContext } from 'react'
import { AuthContext } from "../../contexts/auth"
import './Login.css'

const Login = () => {
    const { login } =  useContext(AuthContext) 
    const [errMessage, setErrMessage] = useState("")
    const { register, handleSubmit, reset } = useForm()

    const submitForm = async (e) => {
        const loggedIn = await login(e)
        if (loggedIn === "failed") {
            setErrMessage("Incorrect login details")
            reset()
        }
    }

  return (
    <div className='login-container'>
        <div>
            
            <form 
            className='login-form'
            onSubmit={handleSubmit(submitForm)}
            action="get"
            > 
            <h3>Login</h3>
            {errMessage && <p style={{color: "red"}}>{errMessage}</p>}
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
            Log in
            </button>
            </form>
        </div>
    </div>
  )
}

export default Login