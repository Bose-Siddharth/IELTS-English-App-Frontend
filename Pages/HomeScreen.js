import { View, Text } from "react-native";
import React, { useState } from "react";
import ModuleCard from "../components/ModuleCard";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const propsList = [
    {
      title: "Reading",
      icon: "book",
      locked: false,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
    },
    {
      title: "Listening",
      icon: "hard-of-hearing",
      locked: true,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
    },
    {
      title: "Speaking",
      icon: "microphone",
      locked: true,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
    },
    {
      title: "Writing",
      icon: "pencil-square-o",
      locked: true,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      {propsList.map((props) => {
        return <ModuleCard {...props} />;
      })}
    </View>
  );
};

export default HomeScreen;
