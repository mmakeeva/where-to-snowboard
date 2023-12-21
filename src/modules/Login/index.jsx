import React from "react";

import styles from "./style.module.css";

import Input from "../../UI/Input";

const Login = () => {
    const login = (
        <form className={styles.login}>
            <Input type="email" id="login_email" label="Email" required />
            <Input
                type="password"
                id="login_password"
                label="Password"
                autoComplete="off"
                required
            />
            <Input type="submit" id="login_submit" value="Login" />
        </form>
    );

    return login;
};

export default Login;
