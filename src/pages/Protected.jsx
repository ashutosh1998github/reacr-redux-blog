import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Account from './Account'

export default function Protected({compo}) {
    const {auth} = useSelector(state => state.allUsers)
    
  return (
    <>
{
   auth ? compo : <Navigate to='/login'/>
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
