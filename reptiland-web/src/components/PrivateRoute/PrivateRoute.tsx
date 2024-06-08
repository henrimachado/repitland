import React, { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStorage";

interface IPrivateRoute {
  children: React.ReactNode;
  adminRoute?: boolean;
}
const PrivateRoute = ({ children, adminRoute = false }: IPrivateRoute) => {
  const { loggedUser, setLoggedUser } = useContext(GlobalContext);
  const user = JSON.parse(window.localStorage.getItem('loggedUser') as string);
  
  if (!user || (adminRoute && user.user_type_id !== 1)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
