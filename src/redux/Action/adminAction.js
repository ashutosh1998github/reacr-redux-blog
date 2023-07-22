import api from "../api"
import { ADMIN_EDIT_BLOG_FAIL, ADMIN_EDIT_BLOG_REQUEST, ADMIN_EDIT_BLOG_SUCCESS, ADMIN_GET_ALL_USERS_FAIL, ADMIN_GET_ALL_USERS_REQUEST, ADMIN_GET_ALL_USERS_SUCCESS, ADMIN_GET_USERS_BLOGS_FAIL, ADMIN_GET_USERS_BLOGS_REQUEST, ADMIN_GET_USERS_BLOGS_SUCCESS, ADMIN_USER_BLOCK_UNBLOCK_FAIL, ADMIN_USER_BLOCK_UNBLOCK_REQUEST, ADMIN_USER_BLOCK_UNBLOCK_SUCCESS } from "../Constants/adminConstance"

export const AdminGetallUsers =()=>async(dispatch)=>{
    try {
        dispatch({type:ADMIN_GET_ALL_USERS_REQUEST})
        const {data} = await api.get('/users',{
            params:{
                admin: false // ashe users pathav jyanchi admin key false asel
            }
        })
console.log(data);
        dispatch({type:ADMIN_GET_ALL_USERS_SUCCESS, payload:data})


        
    } catch (error) {
        dispatch({type:ADMIN_GET_ALL_USERS_FAIL, payload:error})

        
    }

}
export const AdminGetUsersBlogs =(id)=>async(dispatch)=>{
    try {
        dispatch({type:ADMIN_GET_USERS_BLOGS_REQUEST})
        const {data}= await api.get(`/blogs` ,{
            params:{
                authorId : id
            }
        })
        dispatch({type:ADMIN_GET_USERS_BLOGS_SUCCESS, payload:data})


        
    } catch (error) {
        dispatch({type:ADMIN_GET_USERS_BLOGS_FAIL, payload:error})

        
    }

}
export const AdminPublishUnpublishBlogAction =(blogId,publish)=>async(dispatch)=>{
    try {
        console.log(blogId,publish);
        dispatch({type:ADMIN_EDIT_BLOG_REQUEST})
       const {data} = await api.patch(`/blogs/${blogId}`,{
        publish
       })
        dispatch({type:ADMIN_EDIT_BLOG_SUCCESS, })


        
    } catch (error) {
        dispatch({type:ADMIN_EDIT_BLOG_FAIL, payload:error})

        
    }


}
export const AdminUserBlockUnblockAction =(userId , active)=> async(dispatch)=>{
try {
    dispatch({type:ADMIN_USER_BLOCK_UNBLOCK_REQUEST})
     await api.patch(`/users/${userId} `,{active})



    dispatch({type:ADMIN_USER_BLOCK_UNBLOCK_SUCCESS})

    
} catch (error) {
    dispatch({type:ADMIN_USER_BLOCK_UNBLOCK_FAIL , payload:error})

    
}

}