import React from "react";
import styles from "./Button.module.css";

function Button({ children, className = "", ...props }) {
    return (
        <button className={`${styles.button} ${className}`} type="button" {...props}>
            {children}
        </button>
    );
}

export default Button;
