import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogAction } from '../../redux/Action/blogAction'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function AddBlog() {
   const {auth} = useSelector(state => state.allUsers)
   const [content, setcontent] = useState("Hello")
    const dispatch = useDispatch()
    const [blogData, setblogData] = useState({
    heroImage:'https://wallpapercave.com/wp/wp5924564.jpg',
    title:'Anime',
        

    })
    const handleAddBlog =()=>{
        dispatch(blogAction({...blogData,
            content,
            publish:false,
        authorId:auth.id
    })) // jo login ahe tyachi id janar ahe ithe publish unpublish karniya sathi

    console.warn(content)

    console.log(blogData);

    }
  return (
    <>
    <div className="container">
        
        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="card">
                    <div className="card-header d-flex justify-content-center mt-2"><h1>Add-Blogs</h1></div>
                    <div className="card-body">
                        <input type="text" 
                        onChange={e=> setblogData({...blogData, heroImage:e.target.value})}
                         value={blogData.heroImage}
                           placeholder='Enter Image Url'
                            className="form-control" /><br />

                        <input type="text" 
                        onChange={e=> setblogData({...blogData, title:e.target.value})}
                         value={blogData.title}
                           placeholder='Please Enter Title'
                            className="form-control" /><br />

                            <ReactQuill theme='snow'  value={content} onChange={setcontent}></ReactQuill>
                            <br />

                        <button className='btn btn-outline-success w-100' onClick={handleAddBlog}>Add Blog</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}
// 