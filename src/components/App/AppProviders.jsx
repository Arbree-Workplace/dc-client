import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from '../Auth/AuthProvider'

function AppProviders({ children }) {
    return (
        <Router>
            <AuthProvider>{children}</AuthProvider>
        </Router>
    )
}

export default AppProviders