import React from "react";
import Form from "../Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import FormContent from "./FormContent";

const FormRegister = () => {
    const onSubmit = (data) => console.log(data);
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
