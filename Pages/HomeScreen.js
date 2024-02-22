import { View, Text } from "react-native";
import React from "react";
import ModuleCard from "../components/ModuleCard";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ModuleCard title={"Reading"} icon={"book"} locked={false} />

      <ModuleCard
        title={"Listening"}
        icon={"hard-of-hearing"}
        lectures={9}
        tests={2}
        locked={true}
      />
      <ModuleCard title={"Speaking"} icon={"microphone"} locked={true} />
      <ModuleCard title={"Writing"} icon={"pencil-square-o"} locked={true} />
    </View>
  );
};

export default HomeScreen;
