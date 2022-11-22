import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({classname, children, ...props}) => {
    return (
        <button {...props} className={[classes.myBtn, classname].join(' ')}>
            {children}
        </button>
    )
}

export default MyButton;