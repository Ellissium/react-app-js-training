import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MyInput from '../components/UI/input/MyInput.jsx'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context/index.js'
import Loader from '../components/UI/Loader/Loader.jsx'

const Login = () => {
    const navigate = useNavigate();
    const { isLoading, setIsAuth, setLoading } = useContext(AuthContext)

    const goBack = () => navigate(-1);
    const login = event => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
            setLoading(false);
            navigate("/about")
        }, 2000);
    }
    if (isLoading) {
        return <Loader/> 
    } else {
        return (
            <div>
                <h1>Страница для логина</h1>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="Логин" />
                    <MyInput type="password" placeholder="Пароль" />
                    <MyButton>Войти</MyButton>
                </form>
                <MyButton
                    onClick={goBack}
                >Назад</MyButton>
            </div>
        )
    }
    
}

export default Login