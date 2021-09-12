import { combineReducers } from "redux";
import  InfoReducer  from "./inforeducer";

const Combine = combineReducers({
    infoReducer: InfoReducer
});
export default Combine;