import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useController } from "react-hook-form";

const CustomSelectField = ({ children, name }) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name });

    return (
        <FormControl fullWidth>
            <InputLabel error={Boolean(error)}>{field.value}</InputLabel>
            <Select
                error={Boolean(error)}
                label={name.toUpperCase()}
                {...field}
                value={field.value || ''}
            >
                {children}
            </Select>
        </FormControl>
    );
};

export default CustomSelectField;
