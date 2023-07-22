import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllBlogAction } from '../redux/Action/blogAction'
// import ReactHtmlParser  from 'html-react-parser'
export default function Home() {
  const dispatch = useDispatch()
  const {reduxBlogs} = useSelector(state => state.allBlogs)
  useEffect(() => {
    dispatch(getAllBlogAction())
    
  }, [])
  
  return (
    <>
   
      <div className="container mt-5">
        <div className="row">
        {
     reduxBlogs && reduxBlogs.map(item=> <> 
          <div className="col-sm-6 ">

          
          <div className="card mt-5">
            <div className="card-header d-flex justify-content-center">
              <h1><strong>{item.title}</strong></h1></div>
              <div className="card-body">
                
                <img className='img-fluid' src={item.heroImage} alt=''  />
                <p><h5><strong>Blog Description:</strong></h5> 
                       {item.content}                       </p>
                <Link to={`/details/${item.id}`}> More Details</Link>
              </div>
            
          </div>
        </div>

        </>)
      }
        </div>
      </div>
    
    
    
    
    
    
    </>
  )
}

