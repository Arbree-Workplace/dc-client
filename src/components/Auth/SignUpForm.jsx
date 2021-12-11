import { React, useState } from "react"
import useFetchPost from "../../hooks/useFetchPost"

function SignUpForm(props) {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = inputs
        const data = await useFetchPost('users/register', payload)
        data._id ? props.loginUponSignUp() : console.log(data)
    }

    return (
        <form className="flex flex-col px-2 py-2 gap-4"
            onSubmit={(event) => handleSubmit(event)}>
            <input
                type="text"
                name="name"
                value={inputs.name || ''}
                placeholder="Username"
                className="px-2 py-1"
                onChange={(event) => handleChange(event)} />
            <input
                type="email"
                name="email"
                value={inputs.email || ''}
                placeholder="Email"
                className="px-2 py-1"
                onChange={(event) => handleChange(event)} />
            <input
                type="password"
                name="password"
                value={inputs.password || ""}
                placeholder="Password"
                className="px-2 py-1"
                onChange={(event) => handleChange(event)} />
            <input
                type="password"
                name="password2"
                value={inputs.password2 || ""}
                placeholder="Re Password"
                className="px-2 py-1"
                onChange={(event) => handleChange(event)} />
            <button className="px-2 py-2 rounded bg-indigo-300 cursor-pointer">
                Submit</button></form>
    )
}

export default SignUpForm