import { createContext, useEffect, useState } from "react";
import { apiClient } from "../config/apiConfig";

const AuthContext = createContext({
  user: null,
  token: null,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    console.log("token", token);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
