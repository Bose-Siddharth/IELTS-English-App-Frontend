import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { level1Data } from "../constants/mod1level1";
import StopClock from "../components/StopClock";

// const TestScreen = ({ module, level }) => {
const TestScreen = () => {
  const data = level1Data.questions.questions;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  console.log(data[currentQuestion].options[0].value);
  const listComponent = ({ item }) => {
    return (
      item.id >= 1 && (
        <Pressable
          style={[
            styles.listItem,
            currentQuestion === item.id && {
              backgroundColor: "blue",
            },
          ]}
          onPress={() => {
            console.log("clicked");
            setCurrentQuestion(item.id);
          }}
        >
          <Text
            style={
              currentQuestion === item.id
                ? { color: "white" }
                : { color: "blue" }
            }
          >
            {item.id}
          </Text>
        </Pressable>
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.timerWithHeading}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Questions</Text>
          </View>
          <View style={styles.timer}>
            <StopClock />
          </View>
        </View>
        <View style={styles.questionsList}>
          <FlatList
            data={data}
            renderItem={listComponent}
            horizontal={true}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.testContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {`${data[currentQuestion].id}. ${data[currentQuestion].question}`}
          </Text>
        </View>
        <ScrollView style={styles.answerContainer}>
          {/* Map the answers */}
          <View>
            {data[currentQuestion].options.map((option) => {
              return (
                <Pressable style={styles.answers} key={option.key}>
                  <Text style={styles.key}>{option.key}</Text>
                  <Text style={styles.value}>{option.value}</Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.ctaContainer}>
          <Pressable style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Next Question</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {},
  timerWithHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {},
  headingText: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  timer: {},
  questionsList: {
    marginTop: "5%",
    paddingLeft: "3%",
  },
  listItem: {
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 16,
    flex: 1 / 8,
    borderColor: "blue",
  },
  testContainer: {
    marginTop: "10%",
    paddingHorizontal: "5%",
    gap: 20,
    flex: 1,
  },
  question: {
    backgroundColor: "white",
    padding: "5%",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
  },
  questionText: {
    color: "blue",
    fontWeight: "bold",
  },
  answerContainer: {
    flex: 1,
  },
  answers: {
    flexDirection: "row",
    padding: "5%",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  key: {
    flex: 1 / 4,
    // borderWidth: 1,
    textAlign: "center",
    fontWeight: "600",
  },
  value: {
    flex: 3 / 4,
    // borderWidth: 1,
    fontWeight: "600",
  },
  ctaContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "auto",
  },
  clearButton: {
    padding: "5%",
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "blue",
    width: "40%",
  },
  clearButtonText: {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
  },
  actionButton: {
    padding: "5%",
    borderRadius: 25,
    backgroundColor: "blue",
    width: "40%",
  },
  actionButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
