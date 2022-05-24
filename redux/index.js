import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import reducer from "./reducer"
import { composeWithDevTools} from "redux-devtools-extension"


const initStore = () => { 
   return createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))
}
export const wrapper = createWrapper(initStore)