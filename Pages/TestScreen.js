import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
// import StopClock from "../components/StopClock";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useExam } from "../context/ExamProvider";

// const TestScreen = ({ module, level }) => {
const TestScreen = () => {
  const { getRequest } = useHttp();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { module, level } = useExam();
  console.log("====================================");
  console.log(module, level);
  console.log("====================================");
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await getRequest(
          `/exam/module${module}/level${level}/questions`,
          token
        );
        setQuestions(response);
        setLoading(false);
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

  console.log("====================================");
  console.log(questions);
  console.log("====================================");
  const listComponent = ({ item }) => {
    return (
      <Pressable
        style={[
          styles.listItem,
          currentQuestion === item.id - 1 && {
            backgroundColor: "blue",
          },
        ]}
        onPress={() => {
          console.log("clicked");
          setCurrentQuestion(item.id - 1);
        }}
      >
        <Text
          style={
            currentQuestion === item.id - 1
              ? { color: "white" }
              : { color: "blue" }
          }
        >
          {item.id}
        </Text>
      </Pressable>
    );
  };
  if (loading && questions) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignSelf: "center" }}
        size={64}
        color={"blue"}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.timerWithHeading}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Questions</Text>
          </View>
          <View style={styles.timer}>{/* <StopClock /> */}</View>
        </View>
        <View style={styles.questionsList}>
          <FlatList
            data={questions.questions}
            renderItem={listComponent}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.testContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {questions?.questions[currentQuestion]?.question}
          </Text>
        </View>
        <ScrollView style={styles.answerContainer}>
          {/* Map the answers */}
          <View>
            {questions?.questions[currentQuestion]?.options?.map((option) => {
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
