import React, { useState } from 'react';
import { StyleSheet, View, ProgressBarAndroid, ProgressViewIOS, Text, TouchableOpacity, TextInput, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const [stopValue, setStopValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleStopAtValue = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setStopValue(value / 100);
      setProgress(value / 100);
    }
  };

  const handleKey = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKey}>
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <ProgressViewIOS
            progress={progress}
            style={styles.progressBar}
            trackTintColor="#ccc"
            progressTintColor="#1F41BB"
          />
        ) : (
          <View style={styles.progressBarContainer}>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={progress}
              style={styles.progressBarAndroid}
              color="#1F41BB"
            />
            
            <View style={styles.dott}>
              <View style={[styles.dot, { left: `${progress * 200 - 4}px` }]} />
              <View style={[styles.dot, { left: `${progress * 200 + 66 - 4}px` }]} />
              <View style={[styles.dot, { left: `${progress * 200 + 132 - 4}px` }]} />
              <View style={[styles.dot, { left: `${progress * 200 + 132 - 4}px` }]} />
            </View>
          </View>
        )}
        <Text>Progress: {Math.round(progress * 100)}%</Text>
       
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Enter stop value (0 to 100)"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleStopAtValue}>
          <Text style={styles.buttonText}>Stop At Value</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  progressBar: {
    width: 300,
    marginTop: 20,
  },
  progressBarContainer: {
    width: 240, 
    marginTop: 20,
    position: 'relative',  
  },
  progressBarAndroid: {
    width: '100%',
    backgroundColor: 'transparent',  
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1F41BB',
    width: 180,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  dott: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    width: '100%',
    justifyContent:'space-evenly',
    marginTop:"5%",
  },
});

export default Progress;