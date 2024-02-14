import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CardLocking = () => {
  const [button2Text, setButton2Text] = useState('Locked');
  const [button2Locked, setButton2Locked] = useState(true);

  const unlockButton2 = () => {
    setButton2Text('Unlocked');
    setButton2Locked(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={unlockButton2}
          disabled={!button2Locked} // Disable button when unlocked
        >
          <Text style={styles.buttonText}>Unlock</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[styles.button, { backgroundColor: button2Locked ? 'blue' : 'green' }]}
          disabled={true} // Disable the first button
        >
          <Text style={styles.buttonText}>{button2Text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardLocking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
