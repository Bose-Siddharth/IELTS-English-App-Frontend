import React from "react";
import AppRouter from "../routes/AppRouter";
import AuthRouter from "../routes/AuthRouter";
import { useLogin } from "../context/LoginProvider";
// import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaView } from "react-native";

// const queryClient = new QueryClient();

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <QueryClientProvider client={queryClient}> */}
        {isLoggedIn ? <AppRouter /> : <AuthRouter />}
      {/* </QueryClientProvider> */}
    </SafeAreaView>
  );
};

export default MainNavigator;
