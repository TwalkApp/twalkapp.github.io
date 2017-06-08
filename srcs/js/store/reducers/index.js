import {combineReducers} from "redux";
import presentation from "./presentation";
import about from "./about";

export default combineReducers({
	presentation,
	about
});
