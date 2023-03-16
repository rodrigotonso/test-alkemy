import React from "react";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

const CustomTextField = ({ name, type='text' }) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name });

    return (
        <TextField
            {...field}
            name={name}
            error={Boolean(error)}
            helperText={error?.message && error.message}
            label={name}
            type={type}
            variant="outlined"
        />
    );
};

export default CustomTextField;
