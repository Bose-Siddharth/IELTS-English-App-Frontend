import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../Pages/LoginScreen";
import SignupScreen from "../Pages/SignupScreen";
import LandingPageScreen from "../Pages/LandingPageScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import ProgressScreen from "../Pages/ProgressScreen";

const Tab = createBottomTabNavigator();

export default function AuthRouter() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#000" }}
      initialRouteName="ProgressScreen"
    >
      <Tab.Screen
        name="LandingPageScreen"
        component={LandingPageScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in" size={20} color="#898989" />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          tabBarLabel: "Sign Up",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-plus" size={20} color="#898989" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
