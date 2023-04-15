import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    
      const storeToken = (token) => { 
          localStorage.setItem('meyd-itAuthToken', token);
      }

      const login = async (e) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/login`, e)
        .then( async (res) => {
            const token = res.data.token
            localStorage.setItem('meyd-itAuthToken', token)
            await authenticateUser()
            navigate('/')
        })
        .catch(() => {
            return "failed"
        })
      }
  
      const authenticateUser = async () => {        
        const storedToken = localStorage.getItem('meyd-itAuthToken')        

        if (storedToken) {
          await axios.get(
            `${process.env.REACT_APP_API_URL}/auth/verify`, 
            { headers: { Authorization: `Bearer ${storedToken}`} }
          )
          .then((response) => {
            const user = response.data;
            setIsLoggedIn(true);
            setIsLoading(false);
            setUser(user)
          })
          .catch((error) => {     
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);        
          }); 
          return     
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);   
        }   
        }
  
        const removeToken = () => {     
          localStorage.removeItem("meyd-itAuthToken")
        }
       
       
        const logOutUser = async () => {  
          await removeToken();
          authenticateUser();
        }  
      
        useEffect(()=>{
          authenticateUser();
        }, [])
   
    return (
        <AuthContext.Provider value={{ login, isLoggedIn, isLoading, user, setUser, storeToken, authenticateUser, logOutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthProviderWrapper,
    AuthContext
}