import  { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import { logiACtion } from '../redux/Action/userAction'

export default function Login() {
  const {loginError , auth , loading} = useSelector(state=> state.allUsers)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginData, setloginData] = useState({
    email:'john@gmail.com',
    password:"1234"
  })
  const handleLogin=()=>{
    dispatch(logiACtion(loginData))

  }
  useEffect(() => {
if (auth) {
  if(auth.admin){
    navigate('/admin')

  }
  else{
    
    navigate('/user/account')
  }


  
}  
  }, [auth])
  
  return (
    <>
    <div class="container  mt-5">
          <div class="row">
            <div class="col-sm-6 offset-sm-3">

              {
                loginError && <div className="alert alert-danger"> {loginError}</div>
              }
              {
                loading && <>
                Please Wait ...<div class="spinner-border text-primary"></div>
                </>

              }
              <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                  <div>
                    <label for="email" class="form-label">First Email</label>
                    <input
                    value={loginData.email}
                    onChange={e=> setloginData({...loginData , email:e.target.value})}
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div class="mt-2">
                    <label for="password" class="form-label">Password</label>
                    <input
                    value={loginData.password}
                    onChange={e=> setloginData({...loginData , password:e.target.value})}
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                  <button onClick={handleLogin} type="button" class="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                  <p class="text-center mt-3">
                    Dont Have Account? <Link to="/register">Create Account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    
    </>
  )
}
