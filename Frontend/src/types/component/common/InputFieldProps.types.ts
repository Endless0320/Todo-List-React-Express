export default interface InputFieldPropsTypes {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}