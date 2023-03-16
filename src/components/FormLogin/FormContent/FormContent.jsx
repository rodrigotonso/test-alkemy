import React from "react";
import CustomTextField from "../../Form/CustomTextField/CustomTextField";
import CustomSelectField from "../../Form/CustomSelectField/CustomSelectField";
import MenuItem from "@mui/material/MenuItem";
import { useWatch } from "react-hook-form";

const COUNTRIES = ["ARG", "BR", "CHL", "URU"];

const FormContent = () => {
    const watchEmail = useWatch({name:'email'})

    return (
        <>
        {watchEmail && <p>FELICITACIONES - {watchEmail}</p>}
            <CustomTextField name="email" />
            <CustomTextField name="password" type="password" />
            {/* <CustomSelectField name="country">
                {COUNTRIES.map((country) => (
                    <MenuItem key={country} value={country}>
                        {country}
                    </MenuItem>
                ))}
            </CustomSelectField> */}
            <button type="submit">Envíar</button>
        </>
    );
};

export default FormContent;
