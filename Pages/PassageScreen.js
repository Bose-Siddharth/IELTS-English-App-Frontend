import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { level1Data } from "../constants/mod1level1";
import { useNavigation } from "@react-navigation/native";

const PassageScreen = () => {
  const navigation = useNavigation();
  console.log(level1Data);
  return (
    <>
      <ScrollView style={styles.passageContainer}>
        <Text style={styles.question}>
          Read the passage carefully and answer the questions that follow:
        </Text>
        <Text style={styles.passageText}>{level1Data.passage.passage}</Text>
      </ScrollView>
      <Pressable
        style={styles.continueButton}
        onPress={() => {
          navigation.navigate("Test");
        }}
      >
        <Text style={styles.continueText}>Proceed to Test</Text>
      </Pressable>
    </>
  );
};

export default PassageScreen;

const styles = StyleSheet.create({
  passageContainer: {
    margin: "3%",
    padding: "3%",
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#ccc",
    elevation: 8,
    paddingBottom: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "justify",
  },
  passageText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "justify",
  },
  continueButton: {
    padding: "3%",
    backgroundColor: "blue",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 4,
    margin: "3%",
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
