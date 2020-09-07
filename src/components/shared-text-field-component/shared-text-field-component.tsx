import React from "react";
import {
    useField, FieldAttributes
} from "formik";
import {
    TextField
} from "@material-ui/core";

type SharedTextFieldProps = { placeholder: string } & FieldAttributes<{}>;

export default function SharedTextFieldComponent({
    placeholder,
    ...props
}: SharedTextFieldProps) {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <TextField
            placeholder={placeholder}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
};