import React from "react";
import {
    useField, FieldAttributes
} from "formik";
import {
    Radio,
    FormControlLabel
} from "@material-ui/core";

type SharedRadioProps = { label: string } & FieldAttributes<{}>;

export default function SharedRadioComponent({ label, ...props }: SharedRadioProps) {
    const [field] = useField<{}>(props);
    return <FormControlLabel {...field} control={<Radio />} label={label} />;
};