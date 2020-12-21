import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadintToRedirect";
import { currentAdmin } from "../../helperFunctions/auth";

const AdminRoute = ({ children, ...rest }) => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ok, setOk] = useState(false);

	useEffect(() => {
		if (user && user.token) {
			currentAdmin(user.token)
				.then((res) => {
					console.log("Current Admin Res", res);
					setOk(true);
				})
				.catch((err) => {
					console.log("Admin Router Error", err);
					setOk(false);
				});
		}
	}, [user]);

	return ok ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default AdminRoute;
