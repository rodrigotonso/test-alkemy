import React from "react";
import CustomTextField from "../../Form/CustomTextField/CustomTextField";
import { useWatch } from "react-hook-form";

const FormContent = () => {
    const watchEmail = useWatch({ name: "email" });

    return (
        <>
            {watchEmail && <p>FELICITACIONES - {watchEmail}</p>}
            <CustomTextField name="email" />
            <CustomTextField name="password" type="password" />
            <button type="submit">Envíar</button>
        </>
    );
};

export default FormContent;
