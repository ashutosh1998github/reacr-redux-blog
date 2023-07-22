import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogoutAction } from '../redux/Action/userAction'

export default function NavBar() {
  const dispatch = useDispatch()
  // const {auth:{name , email}} = useSelector(state=> state.allUsers) // nested destructuring auth chi destructuring keli apan 
  const {auth} = useSelector(state => state.allUsers) // nested destructuring auth chi destructuring keli apan 
  return (
    <>
    <nav  className="navbar navbar-expand-lg bg-dark">
      <div  className="container-fluid">
        <Link  className="navbar-brand text-warning " to="/">Home</Link>
        <button  className="navbar-toggler bg-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div  className="navbar-nav">
            <Link  className="text-warning nav-link active" to="/">Home</Link>
            {/* user login nahi asel tr */}
            {
              !auth && <>
                <Link  className="text-warning nav-link" to="/register">Register</Link>
                <Link  className="text-warning nav-link" to="/login">Login</Link>
              </>
            }
           {/* user admin asel tr */}
           {
            auth && auth.admin && <>
            <Link  className="text-warning nav-link" to="/admin">Dashboard</Link>
            </>
           }
{/* user login asel tevha he sagle links  */}
            {
              auth && <>
                <Link  className="text-warning nav-link" to="/user/account">Account</Link>
            <div class="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
              {auth && auth.name}
              </button>
              <ul class="dropdown-menu">
                <li><button className="dropdown-item" onClick={e =>dispatch(LogoutAction())}>Logout</button></li>
              </ul>
            </div>
              </>
            }
          
          </div>
        </div>
      </div> 
    </nav>
    
    
    
    
    </>
  )
}
