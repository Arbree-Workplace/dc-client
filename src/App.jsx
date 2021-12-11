import * as React from "react"
import AppRoutes from "./components/App/AppRoutes"
import Navbar from "./components/Utils/Navbar"

const App = () => {
    return (
        <div
            id="App"
            className="relative container h-screen flex flex-col gap-4 p-4">
            <Navbar />
            <AppRoutes />
        </div>
    )
}

export default App