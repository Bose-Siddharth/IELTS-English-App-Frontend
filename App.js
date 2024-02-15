import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import Progress from './pages/Progress';


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
