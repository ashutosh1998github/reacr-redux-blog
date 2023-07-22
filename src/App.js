import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import Account from './pages/Account'
import DashBoard from './pages/admin/DashBoard'
import Details from './pages/Details'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/Protected'
import Register from './pages/Register'
import AddBlog from './pages/user/AddBlog'
import Blogs from './pages/user/Blogs' 

export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:blogId' element={<Details/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<DashBoard/>}/>
      <Route path='/user/account/' element={<Protected compo={<Account/>}/>}>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='add-blog' element={<AddBlog/>}/>
      
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>}/>




    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}
