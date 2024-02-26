import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";

const Instructions = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Instructions:</Text>
          <View style={styles.listContainer}>
            <Text style={styles.item}>
              ► Read and understand the provided instructions before starting
              the test.
            </Text>
            <Text style={styles.item}>
              ► Manage your time wisely, keeping track of the overall duration
              and per-question time limits.
            </Text>
            <Text style={styles.item}>
              ► Answer each question carefully, selecting the best option from
              the choices provided.
            </Text>
            <Text style={styles.item}>
              ► Submit your responses before the time expires, reviewing your
              answers if time allows.
            </Text>
            <Text style={styles.item}>
              - Ensure stable internet and sufficient battery to prevent
              interruptions; once interrupted, re-entry to the test may not be
              possible.
            </Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Proceed to test</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 26 : 20,
    // marginTop: Dimensions.get("window").height > 700 && 10,
  },
  modalView: {
    height: Platform.OS === "ios" ? "75%" : "80%",
    // height: Dimensions.get("window").height < 700 ? "90%" : "80%",
    width: Platform.OS === "ios" ? "85%" : "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: "auto",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: Dimensions.get("window").height > 710 ? 18 : 16,
    fontSize: Dimensions.get("window").height > 850 ? 20 : 16,
    marginBottom: 5,
  },
});
