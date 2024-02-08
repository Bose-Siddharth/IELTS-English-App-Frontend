import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../Pages/LoginScreen";
import SignupScreen from "../Pages/SignupScreen";

const Tab = createBottomTabNavigator();

export default function AuthRouter() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Tab.Screen name="Signup" component={SignupScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}
