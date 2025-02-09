export default interface ButtonPropsTypes {
  label: string;
  color?: "primary" | "secondary" | "error" | "success";
  onClick?: () => void;
  type?: "button" | "submit";
}