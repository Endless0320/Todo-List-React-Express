import UserDatatYpes from "./UserData.types";

export default interface AuthContextPropsTypes {
  user: UserDatatYpes | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean
}