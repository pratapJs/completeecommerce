import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducers";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
	user: userReducer,
});

/* const userInfoFromStorage = localStorage.getItem("emailForRegistration")
	? JSON.parse(localStorage.getItem("emailForRegistration"))
	: null;

const initialState = {
	user: { userInfo: userInfoFromStorage },
};
 */
const middleware = [reduxThunk];
const store = createStore(
	rootReducer,

	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
