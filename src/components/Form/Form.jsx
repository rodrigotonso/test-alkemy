import React from "react";
import { useForm, FormProvider } from "react-hook-form";

const Form = ({ children, onSubmit, resolver }) => {
    const methods = useForm({resolver});

    const onError = (error) => {
        console.log(error);
    };
    
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;
