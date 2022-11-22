import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'
import classes from './Navbar.module.css'

const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <nav className={classes.navbar}>
            <MyButton
                classname={classes.link}
                onClick={logout}
            >Выйти</MyButton>
            <Link className={classes.link} to="/login">Login</Link>
            <Link className={classes.link} to="/">Posts</Link>
            <Link className={classes.link} to="/about">About</Link>
        </nav>
    )
}

export default Navbar