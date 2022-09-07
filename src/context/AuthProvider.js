import React, { createContext, useContext } from "react";

export const AuthContex = createContext({});
const useAuth = () => useContext(AuthContex);