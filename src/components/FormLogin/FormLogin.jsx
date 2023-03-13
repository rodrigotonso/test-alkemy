import React from "react";
import { authLogin } from "../../services/auth";
import Form from "../Form/Form";
import FormContent from "./FormContent";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";

const FormLogin = () => {
    const onSubmit = async (data) => {
        const accessToken = await authLogin(data);
        if (accessToken) localStorage.setItem("token", accessToken);
    };

    return (
        <Form
            onSubmit={(data) => {
                onSubmit(data);
            }}
            resolver={yupResolver(validationSchema)}
        >
            <p>Mi Form</p>
            <FormContent />
        </Form>
    );
};

export default FormLogin;
