import React from "react"
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";


function FormSwitch(props) {
	const displaySwitch = props.displaySwitch

	if (displaySwitch === "sign-in") {
		return <SignInForm />
	} else {
		return <SignUpForm loginUponSignUp={props.loginUponSignUp} />
	}
}

export default FormSwitch