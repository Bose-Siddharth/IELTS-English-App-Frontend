import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  ImageBackground,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Instructions from "./Instructions";
import PassageScreen from "./PassageScreen";

function Layout1({ children }) {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to handle opening the instructions modal
  const handleInstructions = () => {
    setModalVisible(true); // Set modalVisible state to true
  };

  // Function to navigate to the PassageScreen
  const handlePassage = () => {
    // Navigate to the passage screen component
    navigation.navigate("Passage");
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/appBg.png")}
        style={{
          flex: 1,
          backgroundColor: "rgba(245,255,255, 0.6)",
          paddingHorizontal: "2%",
        }}
      >
        <View style={styles.header}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={styles.menuButton}
              onPress={handleInstructions}
            >
              <Icon
                name="info"
                size={20}
                color="#858585"
                // Call handleInstructions when info icon is pressed
              />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: "center" }}></View>

            <TouchableOpacity
              style={styles.menuButton1}
              onPress={handlePassage}
            >
              <Icon name="book" size={20} color="#858585" />
            </TouchableOpacity>
          </View>

          <Text style={styles.timertxt}>Test Ends In:</Text>
        </View>
        <View style={{ flex: 1 }}>{children}</View>
      </ImageBackground>

      {/* Instructions modal */}
      <Instructions
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default Layout1;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    paddingBottom: "5%",
  },
  header: {
    flexDirection: "row",
    height: "max-content",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    padding: "2%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginVertical: "2%",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton1: {
    paddingright: "2%",
    marginRight: "39%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginVertical: "2%",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  timertxt: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "40%",
  },
});
