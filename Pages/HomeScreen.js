import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen({ navigation, children }) {
  useEffect(() => {
    StatusBar.setBackgroundColor("#fff");
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon
            name="bars"
            size={24}
            color="#000000"
            onPress={() => navigation.toggleDrawer()}
          />
        </TouchableOpacity>
        {/* <View>{children}</View> */}
        <View
          style={{ flex: 1, alignItems: "center", jutifyContent: "center" }}
        >
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: "2%",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    height: "max-content",
    // borderWidth: 1,
    // borderColor: "red",
  },
  iconButton: {
    position: "absolute",
    // paddingLeft: 20,
    left: 50,
    top: 20,
    backgroundColor: "blue",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1, // Ensure the button is above the content
  },
});
