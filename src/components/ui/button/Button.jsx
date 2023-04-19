import React from 'react';
import classes from './Button.module.css';

const Button = ({children, className, ...props}) => {

    const rootClasses = [classes.btn]

    if (className) {
        rootClasses.push(className);
    }
    return (
        <button {...props} className={rootClasses.join(' ')} >
            {children}
        </button>
    );
};

export default Button;