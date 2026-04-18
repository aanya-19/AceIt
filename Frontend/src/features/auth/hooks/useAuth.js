import { useContext, UseContext, useEffect } from 'react'
import { login,register,logout,getMe } from '../services/auth.api'
import { AuthContext } from '../auth.context'

export const useAuth=()=>{
    const context=useContext(AuthContext)
    const { user,setUser,loading,setLoading } =context

    const handleLogin=async({email,password})=>{
        setLoading(true)
        try {
            const data=await login({email,password})
            setUser(data.user) 
        } catch (error) {
            
        }
        finally{
            setLoading(false)
        }
    }
    const handleRegister=async({username,email,password})=>{
        setLoading(true)
        try {
            const data=await register({username,email,password})
            setUser(data.user) 
        } catch (error) {
            
        }
        finally{
            setLoading(false)
        }
    }
    const handleLogout=async({email,password})=>{
        setLoading(true)
        try {
            const data=await logout()
            setUser(data.user) 
        } catch (error) {
            
        }
        finally{
            setLoading(false)
        }
    }
    return {user,loading,handleLogin,handleRegister,handleLogout}
}