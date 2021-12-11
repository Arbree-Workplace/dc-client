import { React, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useFetchPost from "../../hooks/useFetchPost";

function SignInForm() {
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate()

    const { signin } = useAuth()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = inputs
        const { token, user, errors } = await useFetchPost('users/login', payload)
        token ? (() => { signin(token, user); navigate("/") })() : console.error(errors)
    }

    return (
        <form className="flex flex-col px-2 py-2 gap-4"
            onSubmit={(event) => handleSubmit(event)}>
            <input
                type="email"
                name="email"
                value={inputs.email || ""}
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
                type="submit"
                className="px-2 py-2 rounded bg-indigo-300 cursor-pointer" /></form>
    )
}

export default SignInForm