
import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, } from 'react-native';
import * as FileSystem from 'expo-file-system';
const DownloadCertificateButton = () => {
  const handleDownloadCertificate = async () => {
    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        'http://example.com/certificate.pdf', // Replace with your certificate URL
        FileSystem.documentDirectory + 'certificate.pdf'
      );

      const { uri } = await downloadResumable.downloadAsync();

      Alert.alert('Download complete', 'Certificate downloaded successfully!');
    } catch (error) {
      console.error('Certificate download error:', error);
      Alert.alert('Download error', 'An error occurred while downloading the certificate.');
    }
  };
const CertificateTemplate = ({ recipientName }) => {
  
  return (
<View style={styles.content}>
        <Text style={styles.title}>Certificate of Achievement</Text>
        <Text style={styles.subtitle}>This is to certify that</Text>
        <Text style={styles.recipient}>{recipientName}</Text>
        <Text style={styles.message}>
          has successfully completed the course</Text>
          <TouchableOpacity onPress={handleDownloadCertificate}>
        <Text style={{ fontSize: 20, color: 'blue' }}>Download Certificate</Text>
      </TouchableOpacity>
        </View>     
        
  );
}
// export default CertificateTemplate;
export default DownloadCertificateButton;

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

