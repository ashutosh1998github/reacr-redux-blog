import api from "../api"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/userConstants"

export const registerUserAction =(userData)=>async(dispatch)=>{
    try {

        dispatch({type:USER_REGISTER_REQUEST})
        const {data} = await api.post('/users',userData)
        dispatch({type:USER_REGISTER_SUCCESS})

    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL , payload:error.message || error})
    }

}
export const logiACtion =({email, password})=> async(dispatch)=>{ // login data hota tyat email ani password la destructure kela
    try {
        dispatch({type:USER_LOGIN_REQUEST})
     const {data:users} = await api.get("/users")//data la rename kela as users key la change nhi karu sjhakat pan tyala apan rename karu shakto
      const result =   users.find(item => item.email===email && item.password===password)

      if (!result) {
        dispatch({type:USER_LOGIN_FAIL, payload:'email or password Error'})

        
      }
      else if(result.active=== false){
        dispatch({type:USER_LOGIN_FAIL, payload:"Account is Blocked please Contact Admin"})
         
      }
      else{
        dispatch({type:USER_LOGIN_SUCCESS, payload:result})
      }
    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL, payload:error})

        
    }



}
export const LogoutAction =()=>(dispatch)=>{
    dispatch({type:USER_LOGOUT})


}