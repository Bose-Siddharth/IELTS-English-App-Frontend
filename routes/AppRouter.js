import React, { useEffect, useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLogin } from "../context/LoginProvider";
import HomeScreen from "../Pages/HomeScreen";
import ProgressScreen from "../Pages/ProgressScreen";
import Layout from "../Pages/Layout";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import TestScreen from "../Pages/TestScreen";
import PassageScreen from "../Pages/PassageScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useHttp from "../hooks/useHttp";
import { useQuery } from "react-query";

// Custom drawer content component
function CustomDrawerContent({ navigation }) {
  const { setIsLoggedIn } = useLogin();
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <DrawerItem
          style={styles.items}
          label="Home"
          onPress={() => navigation.navigate("Home")}
          icon={() => (
            <Icon name="gears" size={32} color="blue" style={{ flex: 1 / 4 }} />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          style={styles.items}
          label="Progress"
          onPress={() => navigation.navigate("Progress")}
          icon={() => (
            <MaterialIcon
              name="checklist-rtl"
              size={36}
              color="blue"
              style={{ flex: 1 / 4 }}
            />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          style={styles.items}
          label="Passage"
          onPress={() => navigation.navigate("Passage")}
          icon={() => (
            <Icon
              name="line-chart"
              size={32}
              color="blue"
              style={{ flex: 1 / 4 }}
            />
          )}
          labelStyle={styles.label}
        />
        {/* Add more drawer items as needed */}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
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

// const CustomDrawerHeader = ({ navigation }) => {
//   return (
//     <TouchableOpacity style={styles.menuButton}>
//       <Icon
//         name="bars"
//         size={24}
//         color="#000000"
//         onPress={() => navigation.toggleDrawer()}
//       />
//     </TouchableOpacity>
//   );
// };

export default function AppRouter() {
  // const [loading, setLoading] = useState(false);
  // const { getRequest } = useHttp();
  // const { setIsLoggedIn } = useLogin();
  // checkIsAuthenticated = async () => {
  //   setLoading(true);
  //   const token = await AsyncStorage.getItem("token");
  //   const response = await getRequest("/auth/test", token);
  //   if (!response) {
  //     await AsyncStorage.clear();
  //     setIsLoggedIn(false);
  //   }
  //   return response?.success;
  // };
  // useEffect(() => {
  //   const data = useQuery("checkIsAuthenticated", checkIsAuthenticated, {
  //     refetchInterval: 65000,
  //   });
  //   fetchDataAndLogState();
  // }, []);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // header: (props) => <CustomDrawerHeader {...props} />,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home">
        {() => (
          <Layout>
            <HomeScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Progress">
        {() => (
          <Layout>
            <ProgressScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Passage">
        {() => (
          <Layout title="Passage">
            <PassageScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Test">
        {() => (
          <Layout>
            <TestScreen />
          </Layout>
        )}
      </Drawer.Screen>
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
    backgroundColor: "#e7eafa",
    paddingLeft: "5%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "15%",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BB3F3F",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 50,
    justifyContent: "center",
  },
  logoutButtonText: {
    marginLeft: 10,
    color: "#ffffff",
    fontSize: 18,
  },
  menuButton: {
    paddingLeft: 20,
    backgroundColor: "#ffffff",
    // marginTop: StatusBar.currentHeight,
  },
  items: {
    // marginTop: "20%",
    paddingBottom: "5%",
  },
  label: {
    flex: 1 / 4,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    marginLeft: "5%",
  },
});
