import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../hoc/RequireAuth'
import About from '../pages/About'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Post from '../pages/Post'
import Posts from '../pages/Posts'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={
                <RequireAuth>
                    <About />
                </RequireAuth>
            } />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter