import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Pages/LoginScreen";
import SignUpScreen from "./Pages/SignupScreen";
import HomeScreen from "./Pages/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LandingPageScreen from "./Pages/LandingPageScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="LoginScreen" component={LoginScreen} />
    <Tab.Screen name="SignupScreen" component={SignUpScreen} />
  </Tab.Navigator>
);

const MainDrawer = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    {/* Add other drawer screens as needed */}
  </Drawer.Navigator>
);

function Test() {
  return <Text style={{ color: "black" }}>Hello</Text>;
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}> */}
      <Stack.Navigator
        initialRouteName="Landing"
        headerMode="none"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Landing" component={LandingPageScreen} /> */}
        <Stack.Screen name="Otp">
          {(props) => (
            <LandingPageScreen
              {...props}
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Auth"
          component={authenticated ? MainDrawer : AuthTabs}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
