import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CountDown from "react-native-countdown-component";

const Timer = ({ time }) => {
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    if (currentTime === 2380) {
      Alert.alert("Hurry up");
    }
  }, [currentTime]);
  return (
    <View style={{ flexDirection: "row" }}>
      <CountDown
        until={time * 60}
        onFinish={() => Alert.alert("finished")}
        onChange={(time) => {
          setCurrentTime(time);
        }}
        size={20}
        digitStyle={{
          backgroundColor: "#FFF",
          borderWidth: 2,
          borderColor: "#1CC625",
        }}
        digitTxtStyle={{ color: "#1CC625", fontSize: 12, fontWeight: "900" }}
        timeToShow={["M", "S"]}
        timeLabels={{ m: "", s: "" }}
        showSeparator
        separatorStyle={{ color: "#1CC625" }}
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {},
  timerText: {},
});
