import React from "react";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const LoginPage = () => {
  const isLoading = useSelector((store) => store.authReducer.isLoading);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
