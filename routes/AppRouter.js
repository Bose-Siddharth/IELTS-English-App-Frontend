import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Pages/HomeScreen";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Article" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
