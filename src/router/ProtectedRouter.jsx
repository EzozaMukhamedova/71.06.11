import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProtectedRouter = ({ children }) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" />;
};
export default ProtectedRouter;
