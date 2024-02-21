import { View, Text } from "react-native";
import React from "react";
import ModuleCard from "../components/ModuleCard";

const HomeScreen = () => {
  return (
    <View>
      <ModuleCard title={"Reading"} icon={"book"} lectures={9} tests={2} />
      <ModuleCard
        title={"Listening"}
        icon={"hard-of-hearing"}
        lectures={9}
        tests={2}
      />
      <ModuleCard
        title={"Speaking"}
        icon={"microphone"}
        lectures={9}
        tests={2}
      />
      <ModuleCard
        title={"Writing"}
        icon={"pencil-square-o"}
        lectures={9}
        tests={2}
      />
    </View>
  );
};

export default HomeScreen;
