import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ModuleCard = ({ title, lectures, tests, icon }) => {
  return (
    <View>
      <View>
        <Icon name={icon} size={20} color={"blue"} />
        <Text>{title}</Text>
      </View>
      <View>
        <View>
          <Icon name="tasks" size={20} color={"blue"} />
          <Text>{lectures}</Text>
        </View>
        <View>
          <Icon name="check" size={20} color={"blue"} />
          <Text>{tests}</Text>
        </View>
      </View>
    </View>
  );
};

export default ModuleCard;
