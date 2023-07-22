import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Account() {
  return (<>
    <nav class="navbar navbar-expand-lg bg-danger mb-5">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#accountnavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="accountnavbar">
          <div class="navbar-nav">
            <Link className='nav-link ' to='/user/account/blogs'> Blogs</Link>
            <Link className='nav-link active-link' to='/user/account/add-blog'>Add Blog</Link>
            
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>  
    {/* nested route use kela tr he outlet use karava lagto output dakhavniya sathi */}
    </>)
  
}
