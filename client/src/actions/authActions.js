import { LOGGED_IN_USER } from "./actionTypes";

export const loggedInUser = (user, idTokenResult) => async (dispatch) => {
	dispatch({
		type: LOGGED_IN_USER,
		payload: {
			email: user.email,
			token: idTokenResult.token,
		},
	});
};
