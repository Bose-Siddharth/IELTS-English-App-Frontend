import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../Pages/LoginScreen";
import SignupScreen from "../Pages/SignupScreen";
import LandingPageScreen from "../Pages/LandingPageScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import ProgressScreen from "../Pages/ProgressScreen";
import ForgetPasswordScreen from "../Pages/ForgetPasswordScreen";
import OtpScreen from "../Pages/OtpScreen";

const Tab = createBottomTabNavigator();

export default function AuthRouter() {

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#000" }}
      initialRouteName="LandingPageScreen"
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
      <Tab.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{
          tabBarLabel: "Forget Password",
          tabBarIcon: ({ color, size }) => (
            <Icon name="key" size={20} color="#898989" />
          ),
        }}
      />
      <Tab.Screen
        name="GetOTP"
        component={OtpScreen}
        options={{
          tabBarLabel: "Get OTP",
          tabBarIcon: ({ color, size }) => (
            <Icon name="question" size={20} color="#898989" />
          ),
        }}
      />
    </Tab.Navigator> 

    
  );
}
