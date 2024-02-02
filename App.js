import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "./Pages/LandingPageScreen";
import SignUpScreen from "./Pages/SignupScreen";
import LoginScreen from "./Pages/LoginScreen";
import HomeScreen from "./Pages/HomeScreen";
import { StatusBar, View } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <NavigationContainer>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight + 5 }}>
        <Stack.Navigator
          initialRouteName="Landing"
          headerMode="none"
          screenOptions={{ headerShown: false }}
        >
          {auth ? (
            
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ gestureEnabled: false }}
              />
            </>
          ) : (
            <>
              {/* <Stack.Screen name="Landing" component={LandingPageScreen} /> */}
              <Stack.Screen name="Landing">
                {(props) => (
                  <LandingPageScreen {...props} auth={auth} setAuth={setAuth} />
                )}
              </Stack.Screen>
              <Stack.Screen name="Signup">
                {(props) => (
                  <SignUpScreen {...props} auth={auth} setAuth={setAuth} />
                )}
              </Stack.Screen>
              {/* <Stack.Screen name="Signup" component={SignupScreen1} /> */}
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ gestureEnabled: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
