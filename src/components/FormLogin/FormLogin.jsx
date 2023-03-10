import React, { useState } from "react";
import { authLogin, getMyInfo } from "../../services/auth";

const FormLogin = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accessToken = await authLogin(formData);
        localStorage.setItem("token", accessToken);
        console.log('TODO OK')
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
            id="form"
        >
            <input name={"email"} onChange={(e) => handleChange(e)} />
            <input
                type="password"
                name={"password"}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Envíar</button>
        </form>
    );
};

export default FormLogin;
