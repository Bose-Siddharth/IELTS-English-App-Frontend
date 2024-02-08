import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLogin } from "../context/LoginProvider";
import HomeScreen from "../Pages/HomeScreen";

// Custom drawer content component
function CustomDrawerContent({ navigation }) {
  const { setIsLoggedIn } = useLogin();
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate("Home")}
          icon={({ focused, color, size }) => (
            <Icon name="home" size={size} color={color} />
          )}
        />
        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate("Profile")}
          icon={({ focused, color, size }) => (
            <Icon name="user" size={size} color={color} />
          )}
        />
        {/* Add more drawer items as needed */}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          /* handle logout */
          setIsLoggedIn(false);
        }}
      >
        <Icon name="sign-out" size={20} color="#ffffff" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.menuButton}>
      <Icon
        name="bars"
        size={24}
        color="#000000"
        onPress={() => navigation.toggleDrawer()}
      />
    </TouchableOpacity>
  );
};

export default function AppRouter() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // header: (props) => <CustomDrawerHeader {...props} />,
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={HomeScreen} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  drawerContent: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  logoutButtonText: {
    marginLeft: 10,
    color: "#ffffff",
  },
  menuButton: {
    paddingLeft: 20,
    backgroundColor: "#ffffff",
    // marginTop: StatusBar.currentHeight,
  },
});
