import { createContext, useContext, useState } from "react";
import { users } from "../data";
  
  type AuthContextType = {
    currentUser: string | null;
    login: (email: string, password: string) => string | undefined;
    logout: () => void;
  };

  type AuthProviderProps = {
    children: React.ReactNode;
  };
  

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (email: string, password: string): string | undefined => {
  setCurrentUser(email);
  return email;
};


  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
  
};
