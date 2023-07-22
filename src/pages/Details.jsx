import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getSingleBlogAction } from '../redux/Action/blogAction';

export default function Details() {
  const {blogId} = useParams()
  const dispatch = useDispatch()
  console.log(blogId);
  const {singleBlog} = useSelector(state => state.allBlogs)


  useEffect(() => {
    dispatch(getSingleBlogAction(blogId))
    
  }, [])




    
  
  return ( 
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
        
          { 
          singleBlog && <div className="card mt-5 mb-3 ">
          <div className="card-header d-flex justify-content-center">
            <h1>{singleBlog.title}</h1>

          </div>
          <div className="card-body">
            <img className='img-fluid ' src={singleBlog.heroImage}  /> <p>{singleBlog.content}</p></div>
        </div>
        }
          
            

          
        </div>
       
      </div>
      <Link
          className='btn btn-outline-dark' 
          type='button'
          to='/'>
          Back
          </Link>
      
    </div>
    
    
    
    
    
    
    
    </>
  )
}
