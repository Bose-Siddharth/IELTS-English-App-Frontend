import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CertificateTemplate = ({ recipientName, eventName, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Certificate</Text>
      <Text style={styles.ParticipantName}>{ParticipantName}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },

  ParticipantName: {
    
  },
  
  date: {
    
  },
});

export default CertificateTemplate; 