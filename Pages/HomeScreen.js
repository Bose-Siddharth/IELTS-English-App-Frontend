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
      module: 1,
      level: 1,
    },
    {
      title: "Listening",
      icon: "hard-of-hearing",
      locked: false,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
      module: 2,
      level: 1,
    },
    {
      title: "Speaking",
      icon: "microphone",
      locked: false,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
      module: 3,
      level: 1,
    },
    {
      title: "Writing",
      icon: "pencil-square-o",
      locked: true,
      modalVisible: modalVisible,
      setModalVisible: setModalVisible,
      module: 4,
      level: 1,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      {propsList.map((props) => {
        return <ModuleCard {...props} key={props.title} />;
      })}
    </View>
  );
};

export default HomeScreen;
