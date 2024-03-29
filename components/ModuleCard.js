import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import InsetShadow from "react-native-inset-shadow";
import Instructions from "../Pages/Instructions";
import { useNavigation } from "@react-navigation/native";
import { useExam } from "../context/ExamProvider";

const ModuleCard = ({
  title,
  icon,
  locked,
  modalVisible,
  setModalVisible,
  module,
  level,
}) => {
  const navigation = useNavigation();
  const { setModule, setLevel, setIsTestRunning } = useExam();
  return (
    <>
      {modalVisible ? (
        <Instructions
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <View style={styles.cardContainer}>
          <InsetShadow
            containerStyle={
              // [
              styles.container
              // ,locked && { backgroundColor: "rgba(174, 179, 209, 0.1)" },
              // ]
            }
          >
            <View style={styles.moduleContainer}>
              <View style={[styles.moduleIcon, locked && { opacity: 0.5 }]}>
                <Icon name={icon} size={36} color={"blue"} />
              </View>
              <Text style={[styles.moduleText, locked && { color: "gray" }]}>
                {title}
              </Text>
              {locked && (
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: "#fff",
                    flex: 1,
                    padding: 5,
                    alignItems: "center",
                    backgroundColor: "rgba(245, 245, 245, 0.8)",
                    borderRadius: 10,
                  }}
                >
                  <Icon name="lock" size={24} color={"#d21404"} />
                </View>
              )}
            </View>
            <View style={styles.hr}></View>
            <View style={styles.ctaContainer}>
              <Pressable
                style={[styles.cta, locked && { opacity: 0.5 }]}
                onPress={
                  !locked
                    ? () => {
                        setModalVisible(true);
                      }
                    : () => {
                        setModalVisible(false);
                      }
                }
              >
                <Text style={styles.ctaText}>Read Instructions</Text>
              </Pressable>
              <Pressable
                style={[styles.cta, locked && { opacity: 0.5 }]}
                onPress={() => {
                  setModule(module);
                  setLevel(level);
                  setIsTestRunning(true);
                }}
              >
                <Text style={styles.ctaText}>Start Test</Text>
              </Pressable>
            </View>
          </InsetShadow>
        </View>
      )}
    </>
  );
};

export default ModuleCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1 / 4,
    // borderWidth: 1,
    gap: 10,
  },
  hr: {
    borderTopWidth: 2,
    borderTopColor: "rgba(207, 212, 238, 255)",
    marginHorizontal: "8%",
  },
  container: {
    backgroundColor: "rgba(207,212,238, 0.3)",
    flex: 1,
    borderRadius: 8,
    margin: "2%",
    padding: "2%",
    gap: 10,
  },
  moduleContainer: {
    flexDirection: "row",
    flex: 1 / 2,
    alignItems: "center",

    width: "100%",
    height: "80%",
    padding: 8,
    gap: 10,
  },
  moduleIcon: {
    borderWidth: 1,
    borderColor: "rgb(190, 209, 230)",
    flex: 1,
    padding: 8,
    alignItems: "center",
    backgroundColor: "rgba(245,245,245, 0.5)",
    borderRadius: 16,
  },
  moduleText: {
    // borderWidth: 1,
    flex: 6,
    fontSize: 24,
    fontWeight: "bold",
  },
  ctaContainer: {
    flexDirection: "row",
    flex: 1 / 3,
    // borderWidth: 1,
    width: "100%",
    justifyContent: "space-evenly",
    gap: 10,
    paddingHorizontal: "5%",
  },
  cta: {
    justifyContent: "space-evenly",
    padding: "1%",
    borderRadius: 8,
    flexDirection: "row",
    width: "50%",
    backgroundColor: "blue",
    wdith: "50%",
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
