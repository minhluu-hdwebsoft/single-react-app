import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthorContextType {
  isLogin: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthorContext = createContext<AuthorContextType>(null!);

export function AuthorProvider({ children }: { children: ReactNode }) {
  const authLocalStorage = localStorage.getItem("author");
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(authLocalStorage));

  const signOut = () => {
    localStorage.removeItem("author");
    setIsLogin(false);
  };

  const signIn = () => {
    localStorage.setItem("author", "login");
    setIsLogin(true);
  };

  return <AuthorContext.Provider value={{ isLogin, signIn, signOut }}>{children}</AuthorContext.Provider>;
}

export function useAuth() {
  return useContext(AuthorContext);
}
