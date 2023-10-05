import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderMusic from "../components/shared/HeaderMusic";

const ProtecteRoutes = () => {
  

  if (localStorage.getItem("token") !== null) {
    return (
      <>
        <HeaderMusic />
        <Outlet />
      </>
    );
  } else {
    return (<Navigate to="/auth/login" />)
  }
};

export default ProtecteRoutes;
