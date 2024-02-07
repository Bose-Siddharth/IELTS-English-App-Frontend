import "react-native-gesture-handler";
import React from "react";
import LoginProvider from "./context/LoginProvider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes";

const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
