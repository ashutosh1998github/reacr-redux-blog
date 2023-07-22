import api from "../api"
import { ADD_BLOG_FAIL, ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, GET_ALL_BLOG_FAIL, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_FAIL, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, SINGLE_BLOG_REQUEST, SINGLE_BLOG_SUCCESS, USER_BLOG_DELETE_FAIL, USER_BLOG_DELETE_REQUEST, USER_BLOG_DELETE_SUCCESS, USER_BLOG_UPDATE_FAIL, USER_BLOG_UPDATE_REQUEST, USER_BLOG_UPDATE_SUCCESS } from "../Constants/blogConstance"

export const blogAction =(blogData) => async (dispatch)=>{

    try {
        dispatch({type:ADD_BLOG_REQUEST}) 
        const {data} = api.post("/blogs",blogData)
        dispatch({type:ADD_BLOG_SUCCESS})

    } catch (error) {
        dispatch({type:ADD_BLOG_FAIL , payload:error})
        
    }
 
}
export const getBlogAction=(userId)=>async (dispatch)=>{
    try {
        
        dispatch({type:GET_BLOG_REQUEST})
        const {data} =await api.get("/blogs" ,{ 
            params:{
            authorId:userId
        }
     })
     console.log(data);
        dispatch({type:GET_BLOG_SUCCESS, payload:data})
        
    } catch (error) {
         
        dispatch({type:GET_BLOG_FAIL, payload:error})
        
    }

}
export const getAllBlogAction = () =>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_BLOG_REQUEST})

      const {data} = await api.get('/blogs',{
        params:{
            publish:true
        }
      })
      dispatch({type:GET_ALL_BLOG_SUCCESS , payload:data})
    } catch (error) {
        dispatch({type: GET_ALL_BLOG_FAIL , payload:error})

        
    }


}
export const getSingleBlogAction=(blogid)=> async(dispatch)=>{
    try {
        dispatch({type:SINGLE_BLOG_REQUEST})
        const {data}= await api.get(`/blogs/${blogid}`)
        dispatch({type:SINGLE_BLOG_SUCCESS , payload:data})

        
    } catch (error) {
        dispatch({type:SINGLE_BLOG_SUCCESS, payload:error})

        
    }

}
export const userBlogDeleteAction=(blogId)=>async(dispatch)=>{
    try {
        dispatch({type:USER_BLOG_DELETE_REQUEST})
        const {data} = await api.delete(`/blogs/${blogId}`)
        dispatch({type:USER_BLOG_DELETE_SUCCESS})


    } catch (error) {
        dispatch({type:USER_BLOG_DELETE_FAIL, payload:error})

        
    }

}
export const UpdateBlogAction=(deleteid, UblogData)=>async(dispatch)=>{
    try {
        dispatch({type:USER_BLOG_UPDATE_REQUEST})
        const {data} = await api.put(`/blogs/${deleteid}`,UblogData)
        dispatch({type:USER_BLOG_UPDATE_SUCCESS})
        
    } catch (error) {
        
        dispatch({type:USER_BLOG_UPDATE_FAIL , payload:error})
    }
}