import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/useAuth"

function Navbar() {
    const { token, signout } = useAuth()
    const navigate = useNavigate()

    return (
        <nav className="w-full flex flex-row justify-between p-3 rounded bg-indigo-300 shadow shadow-blue-500">
            <div className="flex flex-row gap-2">
                {token ?
                    <Link to="/">
                        <div className="px-2 py-1 rounded bg-emerald-600 text-white shadow shadow-emerald-700">
                            Home</div></Link> : null}
                <Link to="/people">
                    <div className="px-2 py-1 rounded bg-indigo-600 text-white shadow shadow-blue-700">
                        People</div></Link>
                <Link to="/feed">
                    <div className="px-2 py-1 rounded bg-pink-600 text-white shadow shadow-rose-700">
                        Feed</div></Link></div>
            {token ?
                <div className="px-2 py-1 rounded bg-blue-600 text-gray-50 shadow shadow-blue-700 cursor-pointer"
                    onClick={() => signout()}>
                    Sign Out</div> : <div className="px-2 py-1 rounded bg-blue-600 text-gray-50 shadow shadow-blue-700 cursor-pointer"
                        onClick={() => navigate("/access")}>
                    Sign In</div>}</nav>
    )
}

export default Navbar