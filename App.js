import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Progress from './pages/Progress';
import Audio from './pages/Audio';
import CardLocking from './pages/CardLocking';
import Levels from './pages/Levels';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Progress/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
