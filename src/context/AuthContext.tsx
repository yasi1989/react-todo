import { createContext, ReactNode, useContext, useState } from "react";
import useSWR from "swr";

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (userinfo: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users/",
    fetcher
  );

  const login = (userinfo: User) => {
    if (error) {
      throw new Error(error);
    }

    if(!data) {
      throw new Error("Data is not loaded yet");
    }

    if (Array.isArray(data)) {
      const fetchedUser = data.find(
        (user: User) =>
          user.username === userinfo.username && user.email === userinfo.email
      );

      if (!fetchedUser) {
        throw new Error("unmatched data");
      }

      setUser(fetchedUser);

    } else {
      throw new Error("invalid data format");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
