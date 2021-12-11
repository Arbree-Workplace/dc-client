function FormsHeader(props) {
	const handleSwitch = props.handleSwitch

	return (
		<div id="forms-header" className="flex cursor-pointer">
			<span
				name="sign-in"
				className="flex-1 px-2 py-2 text-center rounded-l bg-blue-300"
				onClick={e => handleSwitch(e)}>
				Sign In</span>
			<span
				name="sign-up"
				className="flex-1 px-2 py-2 text-center rounded-r bg-pink-300"
				onClick={e => handleSwitch(e)}>
				Sign Up</span></div>
	)
}

export default FormsHeader