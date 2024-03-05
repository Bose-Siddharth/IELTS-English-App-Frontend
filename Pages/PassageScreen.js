import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useHttp from "../hooks/useHttp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useExam } from "../context/ExamProvider";

const PassageScreen = () => {
  const navigation = useNavigation();
  const { getRequest } = useHttp();
  const [passage, setPassage] = useState();
  // const token = await AsyncStorage.getItem("token");
  const { module, level } = useExam();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await getRequest(
          `/exam/module${module}/level${level}/questions`,
          token
        );
        console.log("====================================");
        setPassage(response.passage);
        // console.warn(passage);
        console.log("====================================");
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();

    // This effect runs before the component loads
    return () => {
      // Cleanup if needed
    };
  }, []);
  return (
    <>
      <ScrollView style={styles.passageContainer}>
        <Text style={styles.question}>
          Read the passage carefully and answer the questions that follow:
        </Text>
        <Text style={styles.passageText}>{passage}</Text>
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
