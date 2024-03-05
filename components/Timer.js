import { View, Text } from "react-native";
import React from "react";

const Timer = ({ time }) => {
  const timeInSec = time * 60;
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <View>
      <Text>{formatTime(timeInSec)}</Text>
    </View>
  );
};

export default Timer;
