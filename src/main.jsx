import React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from './components/App/AppProviders'
import './index.css'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <AppProviders>
            <App />
        </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
)
