import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LoginMidContainer } from "../LoginMid/LoginMid.style";

type Props = {};

const Logout = (props: Props) => {
    
  useEffect(() => {
    console.log(window.localStorage);
    window.localStorage.removeItem("loggedUser");
    window.location.href = `https://localhost:5001/`;
  }, []);

  return <LoginMidContainer>
    <div className="loader"></div>
  </LoginMidContainer>;
};

export default Logout;
