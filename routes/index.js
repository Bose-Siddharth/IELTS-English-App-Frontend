import React from "react";
import AppRouter from "../routes/AppRouter";
import AuthRouter from "../routes/AuthRouter";
import { useLogin } from "../context/LoginProvider";
import Layout from "../Pages/Layout";
import { SafeAreaView } from "react-native";

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoggedIn ? <AppRouter /> : <AuthRouter />}
    </SafeAreaView>
  );
};

export default MainNavigator;
