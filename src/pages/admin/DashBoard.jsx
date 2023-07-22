import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminGetallUsers, AdminGetUsersBlogs, AdminPublishUnpublishBlogAction, AdminUserBlockUnblockAction } from '../../redux/Action/adminAction'

export default function DashBoard() {
  const [selectedBlog, setselectedBlog] = useState()
  const dispatch= useDispatch()
  const {users, userBlogs,adminUserEdit , blogEdited}  = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(AdminGetallUsers ())
   
  }, [adminUserEdit])
  const handleGetUserData=(id)=>{
    dispatch(AdminGetUsersBlogs(id))
  }
  const handleShowEdit =(blog)=>{ //?
    setselectedBlog(blog)

  }
  const handleVisibility =(pub)=>{
    dispatch(AdminPublishUnpublishBlogAction(selectedBlog.id, pub))

  }
   const handleBlockUnblock=(id , act)=>{
    dispatch(AdminUserBlockUnblockAction(id , act))
   }
   useEffect(() => {
    selectedBlog && handleGetUserData(setselectedBlog.authorId)
     
   }, [blogEdited])
   
  
  return (

    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header">Author Data</div>
            <div className="card-body">
              <ul className='list-group'>
                {
                  users && users.length === 0
                   ?<h1>No Users Found</h1>
                  :users.map(item => <>
                   <li 
                  className={
                             item.active ?'list-group-item list-group-item-success'
                                         :'list-group-item list-group-item-danger'}>
                                          {
                                          item.active
                                            ?<button type='button' className='btn btn-danger' onClick={e=> handleBlockUnblock(item.id, false)}>Block</button>
                                            :<button type='button' className='btn btn-success' onClick={e=> handleBlockUnblock(item.id, true)}>Unblock</button>
                                      
                                          }
                  <h1>{item.name}</h1>
                  <p>{item.email}</p>
                  <button
                  className='btn btn-primary' type='button' onClick={e=> handleGetUserData(item.id)}>Details</button>
  
                  </li> <br />
                    </>
                    )
                }
               
               </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
        <div className="card-header">John Blogs</div>
        {
          userBlogs && userBlogs.map(item => <>
        <div className="card-body">
          <button className='btn btn-outline-secondary my-3' onClick={e=> handleShowEdit(item) }>Edit</button>
          {
            item.publish === true ?
            <p className={'bg-success text-dark' }>Publish:Live</p>
            : <p className={'bg-warning text-dark' }>Publish:
            <div class={"spinner-border text-primary"}></div>Pending ...</p>
          }
          <h5>{item.title}</h5>
          <p>{item.content}</p>
        </div>
          </>)
        }
        </div>
        </div>
        
    
    <div className="col-sm-4">
    <div class="card">
      <div class="card-header">Publish</div>
      {
        selectedBlog && 
        
        <div class="card-body">
      <h1>{selectedBlog.title}</h1>
      {
        selectedBlog.publish ? 
         <button onClick={e=> handleVisibility(false)} className='btn btn-outline-danger'>Unpublish</button>
        :<button onClick={e=> handleVisibility(true)} type="button" className="btn btn-outline-success">Publish</button>
      }


        </div>
      }
      </div>
    </div>
    </div>
      </div>
    
    
    
    
    
    </>
  )
}
