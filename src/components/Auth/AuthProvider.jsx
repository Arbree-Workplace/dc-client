import * as React from "react"
import { AuthContext } from "../../contexts/AuthContext"

const getToken = () => localStorage.getItem('token')
const getUser = () => localStorage.getItem('user')

function AuthProvider({ children }) {
    let tokenState = getToken()
    let userState = getUser()
    let [token, setToken] = React.useState(tokenState)
    let [user, setUser] = React.useState(userState)

    const signin = (token, user) => {
        setToken(token)
        setUser(user)
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
    }

    const signout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const value = { token, user, signin, signout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider