import React from "react";

import styles from "./style.module.css";

import Input from "../../UI/Input";
import Checkbox from "../../UI/Checkbox";

const Registration = () => {
    const registration = (
        <form className={styles.login}>
            <Input
                type="email"
                id="registration_email"
                label="Email*"
                required
            />
            <Input
                type="text"
                id="registration_name"
                label="First name*"
                placeholder="Ivan"
                required
            />
            <Input
                type="text"
                id="registration_lastname"
                label="Last name"
                placeholder="Ivanov"
            />
            <Input
                type="password"
                id="registration_password"
                label="Password*"
                autoComplete="off"
                required
            />
            <Checkbox
                chb={{
                    value: "isSigned",
                    name: "update",
                    label: "Sign me up for email updates from WhereToSnowboard",
                }}
                handler={() => {}}
            />
            <Checkbox
                chb={{
                    value: "isAgree",
                    name: "privacy",
                    label: "I agree to the Privacy Notice",
                }}
                handler={() => {}}
            />
            <Input type="submit" id="registration_submit" value="Send" />
        </form>
    );
    return registration;
};

export default Registration;
