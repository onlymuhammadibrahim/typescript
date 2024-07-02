import { createContext, useEffect, useState } from "react";

export interface User {
  Name: string;
  Age: number;
  Married: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const ContextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(ContextInitialValues);

interface Props {
  children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([{ Name: "ibm", Age: 20, Married: false }]);
  }, []);

  const addUser = (user: User) => null;
  const updateUser = (id: string) => null;
  const deleteUser = (id: string) => null;

  return <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>{props.children}</UserContext.Provider>;
};
