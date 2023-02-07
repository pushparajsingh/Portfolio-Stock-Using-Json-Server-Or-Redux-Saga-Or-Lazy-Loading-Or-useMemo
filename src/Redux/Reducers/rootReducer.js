import { combineReducers } from "redux";
import AllPortFolioData from "./reducer";

//yaha loginReducer ma karli bracket ha, es liya combineReducer ka andar ma karlibracket nahi ha
const rootReducer = combineReducers({ AllPortFolioData });
export default rootReducer;
