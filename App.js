import "react-native-gesture-handler";
import React from "react";
import LoginProvider from "./context/LoginProvider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes";
import Certificate from "./Pages/Certificate";
const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <Certificate />
    </LoginProvider>
  
  );
};

export default App; 
