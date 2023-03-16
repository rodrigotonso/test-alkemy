import React from "react";
import Form from "../Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import FormContent from "./FormContent";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
const navigate = useNavigate()
    const onSubmit = (data) => navigate('/',{state:{...data}});
    return (
        <Form
            onSubmit={(data) => onSubmit(data)}
            resolver={yupResolver(validationSchema)}
        >
            <FormContent />
        </Form>
    );
};

export default FormRegister;
