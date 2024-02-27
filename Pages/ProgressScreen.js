import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ProgressScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        marginTop: 10,
      }}
    >
      <View style={styles.box}>
        <View style={[styles.dot, { top: "-4%" }]}></View>
        <View style={styles.diagonal}></View>
        {/* <View
          style={[
            styles.dot,
            {
              bottom: "60%",
              left: "11%",
            },
          ]}
        ></View> */}
        <View
          style={[
            styles.dot,
            {
              bottom: "-5%",
              left: "-2.5%",
            },
          ]}
        ></View>
        <View
          style={{
            padding: 16,
            position: "absolute",
            top: "-15%",
            right: "2.5%",
            borderRadius: 50,
            borderColor: "#c0088c",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 3, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 3,
            borderRadius: 50,
            // overflow: Platform.OS === "ios" ? "hidden" : null,
            backgroundColor: "blue",
          }}
        >
          <Icon name="book" size={30} color="white" />
        </View>
        <View
          style={{
            padding: 16,
            position: "absolute",
            borderRadius: 50,
            borderColor: "blue",
            borderWidth: 3,
            elevation: 4,
            top: "-40%",
            left: "70%",
            shadowColor: "#000",
            shadowOffset: { width: 3, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 3,
            borderRadius: 50,
            zIndex: 1000,
            backgroundColor: "#cf9a64",
          }}
        >
          <Icon name="user" size={15} color="white" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.diagonal2}></View>
        {/* <View
          style={[
            styles.dot,
            {
              top: "50%",
              left: "5%",
            },
          ]}
        ></View> */}
        <View
          style={{
            padding: 16,
            position: "absolute",
            top: "-10%",
            left: "-7.5%",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 3, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 3,
            borderRadius: 50,
            borderColor: "#c0088c",
            // overflow: Platform.OS === "ios" ? "hidden" : null,
            backgroundColor: "blue",
            zIndex: 999,
          }}
        >
          <Icon name="hard-of-hearing" size={30} color="white" />
        </View>
        <View
          style={[
            styles.dot,
            {
              bottom: "-4%",
              left: "50%",
            },
          ]}
        ></View>
      </View>
      <View style={styles.box}>
        {/* <View
          style={[
            styles.dot,
            {
              bottom: "58%",
              right: "5%",
            },
          ]}
        ></View> */}
        <View
          style={[
            styles.dot,
            {
              bottom: "-2.5%",
              right: "-2.5%",
            },
          ]}
        ></View>
        <View style={styles.diagonal3}></View>
      </View>
      <View style={styles.box}>
        <View
          style={{
            padding: 20,
            position: "absolute",
            top: "-22%",
            right: "-7.5%",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 3, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 3,
            borderRadius: 40,
            borderColor: "#c0088c",
            // overflow: Platform.OS === "ios" ? "hidden" : null,
            backgroundColor: "blue",
            zIndex: 999,
          }}
        >
          <Icon name="microphone" size={30} color="white" />
        </View>
        <View
          style={[
            styles.dot,
            {
              bottom: "-4%",
              right: "50%",
            },
          ]}
        ></View>
        <View style={styles.diagonal4}>
          <View
            style={{
              padding: 16,
              position: "absolute",
              bottom: "-22%",
              left: "-22%",
              borderRadius: 50,
              borderColor: "#c0088c",
              // overflow: Platform.OS === "ios" ? "hidden" : null,
              elevation: 4,
              shadowColor: "#000",
              shadowOffset: { width: 3, height: 4 },
              shadowOpacity: 1,
              shadowRadius: 3,
              borderRadius: 50,
              backgroundColor: "blue",
              zIndex: 999,
            }}
          >
            <Icon name="pencil-square-o" size={30} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  box: {
    flex: 1 / 4,
    // borderWidth: 1,
    // borderColor: "#ccc",
  },
  diagonal: {
    flex: 1,
    borderTopWidth: 8,
    borderLeftWidth: 5,
    borderColor: "#2743b8",
    borderTopRightColor: "#000",
    borderTopLeftRadius: 200,
    height: "100%",
    width: "80%",
    zIndex: 0,
  },
  diagonal2: {
    zIndex: 0,
    flex: 1,
    borderBottomWidth: 8,
    borderLeftWidth: 5,
    borderColor: "#2743b8",
    borderBottomLeftRadius: 150,
    height: "50%",
    width: "50%",
  },
  diagonal3: {
    zIndex: 0,
    flex: 1,
    alignSelf: "flex-end",
    borderTopWidth: 8,
    borderRightWidth: 5,
    borderColor: "#2743b8",
    borderTopRightRadius: 150,
    height: "50%",
    width: "45%",
    marginTop: "-2.5%",
  },
  diagonal4: {
    zIndex: 0,
    flex: 1,
    borderBottomWidth: 8,
    borderRightWidth: 5,
    borderColor: "#2743b8",
    borderBottomRightRadius: 150,
    height: "50%",
    width: "80%",
    alignSelf: "flex-end",
  },
  dot: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#1f317d",
    position: "absolute",
    alignSelf: "center",
    zIndex: 999,
  },
});
