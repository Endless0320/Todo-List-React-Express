export default interface AuthFormPropsTypes {
  title: string;
  onSubmit: (email: string, password: string, username?: string) => Promise<void>;
  buttonLabel: string;
  isRegister?: boolean;
}