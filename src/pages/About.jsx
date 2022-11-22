import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const About = () => {
    const navigation = useNavigate();
    let { username } = useParams();
    return (
        <>
            <h1>Это приложение создано для {username}</h1>
            <button
                onClick={
                    () => {
                        navigation("/")
                    }}
            >
                Go to Posts
            </button>
        </>

    )
}

export default About