import {combineReducers} from "redux";
import todoReducer from "./todoreduce";

const rootReducer = combineReducers(
    {
        mytodo: todoReducer
    }
)
export default rootReducer


