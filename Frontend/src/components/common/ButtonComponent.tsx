import { Button } from "@mui/material";
import ButtonPropsTypes from "../../types/component/common/ButtonProps.types";

export const ButtonComponent = ({ label, color = "primary", onClick, type = "button" }: ButtonPropsTypes) => {
  return (
    <Button fullWidth variant="contained" color={color} type={type} onClick={onClick} sx={{ mt: 2 }}>
      {label}
    </Button>
  );
};
