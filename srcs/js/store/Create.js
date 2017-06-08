import { createStore, compose } from "redux";
import Reducers from "./reducers";
import presentation from "../data/presentation.json";
import about from "../data/about.json";

export default (initialState = {}) => {

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	let init = {
		...initialState,
		...presentation,
		...about
	};

	return createStore(
		Reducers,
		init,
		composeEnhancers(),
	);
};
