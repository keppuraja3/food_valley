import React, { createContext, useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import axios from "axios";
const AuthContext = createContext();

function AuthContext() {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("food-valley-user-token");
    if (token) {
      setAuthToken(token);
      setUser(jwt_decode(token));
    }
  }, []);

  return <></>;
}

export default AuthContext;
