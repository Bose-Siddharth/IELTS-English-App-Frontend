import React from "react";
import AppRouter from "../routes/AppRouter";
import AuthRouter from "../routes/AuthRouter";
import { useLogin } from "../context/LoginProvider";
import Layout from "../Pages/Layout";

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return <>{isLoggedIn ? <AppRouter /> : <AuthRouter />}</>;
};

export default MainNavigator;
