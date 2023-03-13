import React from "react";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

const CustomTextField = ({name}) => {
    const {
        fieldState: { error },
    } = useController({ name });
    
    return (
        <TextField
            error={Boolean(error)}
            helperText={error?.message && error.message}
            label={name}
            variant="outlined"
        />
    );
};

export default CustomTextField;
