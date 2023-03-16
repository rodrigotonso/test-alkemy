import React, { useEffect } from "react";
import { authLogin } from "../../services/auth";
import Form from "../Form/Form";
import FormContent from "./FormContent/FormContent";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import { useSelector, useDispatch } from "react-redux";
import { setUserToken } from "../../store/slices/userSlice";
const FormLogin = () => {
    const isLoggedIn = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const accessToken = await authLogin(data);
        dispatch(setUserToken(accessToken));
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
