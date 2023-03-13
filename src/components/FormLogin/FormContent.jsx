import React from "react";
import CustomTextField from "../Form/CustomTextField/CustomTextField";

const FormContent = () => {

    return (
        <>
            <CustomTextField name='email'/>
            <CustomTextField name='password'/>
            <button type="submit">Envíar</button>
        </>
    );
};

export default FormContent;
