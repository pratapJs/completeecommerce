import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const RegisterComplete = ({ history }) => {
	const email = window.localStorage.getItem("emailForRegistration");

	const [password, setPassword] = useState("");
	const { user } = useSelector((state) => ({ ...state }));
	useEffect(() => {
		window.localStorage.getItem("emailForRegistration");
		if (user && user.token) {
			history.push("/");
		}
	}, [user, history]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		//validation
		if (!email || !password) {
			toast.error("Email and Password is required");
			return;
		}
		if (password.length < 6) {
			toast.error("Password must be at least 6 characters long");
			return;
		}

		try {
			const result = await auth.signInWithEmailLink(
				email,
				window.location.href
			);

			if (result.user.emailVerified) {
				//remove user
				window.localStorage.removeItem("emailForRegistration");
				//get user id token
				const user = auth.currentUser;
				await user.updatePassword(password);
				await user.getIdTokenResult();

				//redirect
				history.push("/");
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	const completeRegistrationForm = () => (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				className="form-control"
				placeholder={email}
				disabled
			/>
			<input
				type="password"
				className="form-control"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
				autoFocus
			/>
			<br />
			<button type="submit" className="btn btn-raised">
				Complete Registration
			</button>
		</form>
	);

	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h4>Register Complete</h4>
					{completeRegistrationForm()}
				</div>
			</div>
		</div>
	);
};

export default RegisterComplete;
