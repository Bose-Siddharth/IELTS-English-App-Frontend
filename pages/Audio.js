import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { tracks } from './Tracks';
import { Audio as ExpoAudio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';


const Audio = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    loadAudio();
    return () => {
      if (sound !== null) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadAudio = async () => {
    try {
      const { sound } = await ExpoAudio.Sound.createAsync(
        { uri: tracks[0].url },
        { shouldPlay: false }
      );
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis);
          setIsPlaying(status.isPlaying);
          setSliderValue(status.positionMillis / status.durationMillis);
        }
      });
    } catch (error) {
     /* console.error('Error loading audio', error);*/
    }
  };
  const togglePlayback = async () => {
    if (sound !== null) {
      try {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying); 
      } catch (error) {
       /* console.error('Error toggling playback', error);*/
      }
    }
  };


  const handleSliderChange = async (value) => {
    if (sound !== null) {
      const newPosition = value;
      setPosition(newPosition); 
      try {
        await sound.setPositionAsync(newPosition); 
        if (!isPlaying) {
          await sound.playAsync();
          setIsPlaying(true);
        }
      } catch (error) {
        Alert.alert('Error setting audio position:', error);
      }
    }
  };





  const renderAudioControls = () => {
    return (
      <View style={styles.audioControls}>
        <TouchableOpacity onPress={togglePlayback}>
          <Ionicons name={isPlaying ? 'pause' : 'play'} size={35} color="black" />
        </TouchableOpacity>
        <View style={styles.sliderContainer}>
          <Text style={styles.durationText}>{`${Math.floor((position / 1000 / 60) << 0)}:${Math.floor((position / 1000) % 60) < 10 ? "0" + Math.floor((position / 1000) % 60) : Math.floor((position / 1000) % 60)}`}</Text>
          <Slider
            style={styles.slide}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            tapToSeek={true}
            onValueChange={

              handleSliderChange
            }
            minimumTrackTintColor='black'
            maximumTrackTintColor='black'
            thumbTintColor='black'
          />
          <Text style={styles.durationText}>{formatTime(duration)}</Text>
        </View>
      </View>
    );
  };
  const formatTime = (timeInMilliseconds) => {
    const totalSeconds = Math.floor(timeInMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padWithZeroes(minutes)}:${padWithZeroes(seconds)}`;
  };

  
  const padWithZeroes = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  const renderTrack = ({ item }) => {
    return (
      <View style={styles.trackContainer}>
        <Text style={styles.trackTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>

      </View>

      <View style={styles.list}>
        <FlatList
          data={tracks}
          keyExtractor={(item) => item.id}
          renderItem={renderTrack}
        />
      </View>

      {renderAudioControls()}
    </View>
  );
};

export default Audio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    flex: 3,
    width: '100%',
  },
  trackContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  trackTitle: {
    fontSize: 18,
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    marginBottom: "76%",
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    height: 100,
    borderRadius: 6
  },
  slide: {
    flex: 1
  },
  sliderContainer: {
    paddingHorizontal: "2%",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});