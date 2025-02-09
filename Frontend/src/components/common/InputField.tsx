import {TextField} from "@mui/material";
import InputFieldPropsTypes from "../../types/component/common/InputFieldProps.types";

export const InputField = ({ label, value, type = "text", required = false, name, onChange, error, helperText }: InputFieldPropsTypes) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      name={name}
      value={value}
      required={required}
      margin="normal"
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputLabelProps={type === "date" ? { shrink: true } : undefined}
    />
  );
};
