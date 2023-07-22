import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserAction } from '../redux/Action/userAction'

export default function Register() {
  const {loading, registered, registrationError} = useSelector(state=> state.allUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registrationData, setregistrationData] = useState({
        name:'john',
        email:'john@gmail.com',
        password:'1234',
        active:true,
        admin:false
    })
    const handleSubmit=()=>{
        dispatch(registerUserAction(registrationData))

    }
    useEffect(()=>{
      if (registered) {
        navigate('/login')
        
      }
    },[registered])

  return ( <> 
  <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 offset-sm-3"> 

           {  
             registrationError && 
           <div className='alert alert-danger'>
            <h1>Something Went Wrong</h1>
           <p>{registrationError}</p>
           </div>

            }
            {
              loading && <div class="spinner-border text-dark"></div>

            }
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  <div>
                    <label for="name" className="form-label">First name</label>
                    <input
                    value={registrationData.name}
                    onChange={e=> setregistrationData({...registrationData, name:e.target.value   })}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose Link username.</div>
                  </div>
                  <div className="mt-2">
                    <label for="email" className="form-label">First Email</label>
                    <input
                                        value={registrationData.email}
                                        onChange={e=> setregistrationData({...registrationData, email:e.target.value  })}

                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose Link username.</div>
                  </div>
                  <div className="mt-2">
                    <label for="password" className="form-label">Password</label>
                    <input
                                        value={registrationData.password}
                                        onChange={e=> setregistrationData({...registrationData, password:e.target.value})}

                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose Link password.</div>
                  </div>
                  
                  <button type="button" onClick={handleSubmit}className="btn btn-primary w-100 mt-3">
                    Register
                  </button>
                  <p className="text-center mt-3">
                    Already Have Account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div></>
  )
}
