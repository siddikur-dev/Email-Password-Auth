import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { loading, user } = use(AuthContext);

  if (loading) {
    return (
      <div
        className=" mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"
        bis_skin_checked="1"
      ></div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
