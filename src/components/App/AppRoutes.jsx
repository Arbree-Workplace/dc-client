import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from '../Auth/RequireAuth'
import Landing from '../../pages/Landing'
import Profile from '../../pages/Profile'
import People from '../../pages/People'
import Feed from '../../pages/Feed'
import PostView from '../../pages/PostView'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={
                <RequireAuth>
                    <Profile />
                </RequireAuth>} />
            <Route path="/access" element={<Landing />} />
            <Route path="/people" element={<People />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:postID" element={<PostView />} />
        </Routes>
    )
}

export default AppRoutes