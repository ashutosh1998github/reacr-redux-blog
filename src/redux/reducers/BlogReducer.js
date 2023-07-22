import { ADD_BLOG_FAIL, ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, GET_ALL_BLOG_FAIL, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_FAIL, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, SINGLE_BLOG_FAIL, SINGLE_BLOG_REQUEST, SINGLE_BLOG_SUCCESS, USER_BLOG_DELETE_FAIL, USER_BLOG_DELETE_REQUEST, USER_BLOG_DELETE_SUCCESS, USER_BLOG_UPDATE_FAIL, USER_BLOG_UPDATE_REQUEST, USER_BLOG_UPDATE_SUCCESS } from "../Constants/blogConstance";

export const blogReducer =( state = {blogs:[],reduxBlogs:[],singleBlog:[]} , {type, payload})=>{
    switch (type) {
        case ADD_BLOG_REQUEST: return{
            ...state,
            loading:true

        }
        case ADD_BLOG_SUCCESS: return{

            ...state,
            loading:false,
            blogAdded:true
        }
        case ADD_BLOG_FAIL: return{
            ...state,
            loading:false,
            addBlogError:payload
        }
            
        case GET_BLOG_REQUEST : return {
            ...state,
            loading:true

        }
        case GET_BLOG_SUCCESS : return{
            ...state,
            loading:false,
            blogs:payload

        }
        case GET_BLOG_FAIL : return{
            ...state,
            loading:false,
            getBlogError:payload
        

        }
        case GET_ALL_BLOG_REQUEST : return{
            ...state,
            loading:false,
        

        }
        case GET_ALL_BLOG_SUCCESS : return{
            ...state,
            loading:false,
            reduxBlogs:payload 
        

        }
        case  GET_ALL_BLOG_FAIL : return{
            ...state,
            loading:false,
            reduxBlogError:payload
        

        }
        case SINGLE_BLOG_REQUEST: return{
            ...state,
            loading:true
        }
        case SINGLE_BLOG_SUCCESS: return{
            ...state,
            loading:false,
            singleBlog:payload
            

        }
        case SINGLE_BLOG_FAIL: return{
            
            ...state,
            loading:false,
            getSingleBlogError:payload

        }
        case USER_BLOG_DELETE_REQUEST: return{
            ...state,
            loading:true
        }
        case USER_BLOG_DELETE_SUCCESS: return{
            ...state,
            loading:false,
            userblogDeleted:!state.userblogDeleted
        }
        case USER_BLOG_DELETE_FAIL: return{
            ...state,
            loading:false,
            userblogDeleteError:payload
        }
       
        case USER_BLOG_UPDATE_REQUEST : return{
            ...state,
             loading:true,

        }
        case USER_BLOG_UPDATE_SUCCESS : return{
            ...state,
             loading:false,
             userBlogUpdated: !state.userBlogUpdated

        }
        case USER_BLOG_UPDATE_FAIL : return{
            ...state,
             loading:false,
             userBlogUpdateError:payload

        }
    
        default: return state
            
    }

}