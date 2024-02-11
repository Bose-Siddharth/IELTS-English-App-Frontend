import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CertificateTemplate = ({ recipientName }) => {
  return (
    
      <View style={styles.content}>
        <Text style={styles.title}>Certificate of Achievement</Text>
        <Text style={styles.subtitle}>This is to certify that</Text>
        <Text style={styles.recipient}>{recipientName}</Text>
        <Text style={styles.message}>
          has successfully completed the course</Text>
        </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  recipient: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CertificateTemplate;