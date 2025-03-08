"use client"
import React, { createContext, useContext, useState , useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state to store logged-in user data
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Load user from localStorage when the app starts
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    // 🟢 Save user in localStorage when it changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", user.access); 
      localStorage.setItem("refresh_token", user.access);

    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      

    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
     
     
    
  };
  const isAuthenticated = !!user;
  if (isLoading) return null; 

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);