import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AdminReducer } from "./reducers/adminReducers";
import { blogReducer } from "./reducers/BlogReducer";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
    allUsers:userReducer,
    allBlogs:blogReducer,
    admin:AdminReducer

})

const reduxStore = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default  reduxStore



