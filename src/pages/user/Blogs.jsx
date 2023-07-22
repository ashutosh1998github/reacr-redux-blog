import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// import REactHtmlParser from 'html-react-parser'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogAction, UpdateBlogAction, userBlogDeleteAction } from '../../redux/Action/blogAction'

export default function Blogs() {
   const {auth}=  useSelector(state=> state.allUsers)
   const {blogs, userBlogUpdated , userblogDeleted}=  useSelector(state=> state.allBlogs)
   const dispatch = useDispatch()
   const [deleteid, setdeleteid] = useState()
   const [Ucontent, setUcontent] = useState()
   const [UblogData, setUblogData] = useState({
    heroImage:'https://wallpapercave.com/wp/wp5924564.jpg',
    title:'Anime',
    Ucontent
    
   })


   useEffect(() => {
    dispatch(getBlogAction(auth.id))
    
   }, [userBlogUpdated , userblogDeleted])
   const handleUserBlogDelete =()=>{
    dispatch(userBlogDeleteAction(deleteid))

   }

   
   
   const HandleUpdateBlogs=()=>{
    dispatch(UpdateBlogAction(deleteid,UblogData))
   }
   
  return (
    <>
   <table class="table table-dark table-striped table-hover">
     <thead>
       <tr>
       <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Image</th>
          <th>Action</th>
       </tr>
     </thead>
      
{
  blogs.map ((item, i) => <>
  <tbody>
     <tr>
      <td>{i+1}</td>
      <td>{item.title}</td>
      <td className='text-light'>{item.content}</td>
      <td><img src={item.heroImage } height ='100px'alt="" /></td>
      <td>
        <button className='btn btn-warning mx-1' data-bs-toggle="modal" onClick={e=> setdeleteid(item.id)} data-bs-target="#UpdateModal">Edit</button>
        <button className='btn btn-danger mx-1'
        data-bs-target='#exampleModal' data-bs-toggle='modal' onClick={e=> setdeleteid(item.id)} data-bs-dismiss>Delete</button>
        </td>
    </tr>
     </tbody>

    
 
 {/* { console.log(item.content)} */}
  
  
  
  
  </>)
}    
   
   </table>

  
   
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Delete Blog?</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <h1>Are You sure You want to delete  This Blog?</h1>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleUserBlogDelete}>Yes</button>
           <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
         </div>
       </div>
     </div>
   </div>

    

   {/* Update Blog */}
    
    <div class="modal fade" id="UpdateModal" tabindex="-1" aria-labelledby="UpdateModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div className="container">
        {/* {
            REactHtmlParser(content)
        } */}
        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="card">
                    <div className="card-header d-flex justify-content-center mt-2"><h1>Add-Blogs</h1></div>
                    <div className="card-body">
                        <input type="text" 
                        onChange={e=> setUblogData({...UblogData, heroImage:e.target.value})}
                         value={UblogData.heroImage}
                           placeholder='Enter Image Url'
                            className="form-control" /><br />

                        <input type="text" 
                        onChange={e=> setUblogData({...UblogData, title:e.target.value})}
                         value={UblogData.title}
                           placeholder='Please Enter Title'
                            className="form-control" /><br />

                            <ReactQuill theme='snow'  value={Ucontent} onChange={setUcontent}></ReactQuill>
                            <br />

                    </div>
                </div>
            </div>
        </div>
    </div>
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal" onClick={HandleUpdateBlogs}>Update Blog</button>
          </div>
        </div>
      </div>
    </div>






    </>
  )
}
