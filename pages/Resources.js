import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import DocumentPicker from 'react-native-document-picker'

const Resources = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedLevel1Option, setSelectedLevel1Option] = useState('');
  const [selectedLevel2Option, setSelectedLevel2Option] = useState('');
  const [selectedLevel3Option, setSelectedLevel3Option] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [fileResponse, setFileResponse] = useState([]);
  // const handleUpload = async () => {
  //   // try {
  //   //   let type = DocumentPicker.types.allFiles; 

  //   //   if (selectedLevel3Option === 'Audio') {
  //   //     type = DocumentPicker.types.audio;
  //   //   } else if (selectedLevel3Option === 'Video') {
  //   //     type = DocumentPicker.types.video;
  //   //   }

  //   //   const res = await DocumentPicker.pick({
  //   //     type: [type],
  //   //   });


  //   //   Alert.alert(
  //   //     'File Selected',
  //   //     `Name: ${res.name}\nType: ${res.type}\nSize: ${res.size}`,
  //   //   );


  //   // } catch (err) {
  //   //   if (err.message==='User cancelled file picker') {
  //   //    Alert.alert('File Picker Cancelled', 'You have cancelled the file picker action.')
  //   //   } else {

  //   //     Alert.alert('Error', 'An error occurred while picking the file.');
  //   //   }
  //   // }

  // };

  const handleDocumentSelection = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      for (i in res) {
        console.log(
          i.uri,
          i.type, // mime type
          i.name,
          i.size
        );
      }
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const handleLevelChange = (value) => {
    setSelectedValue(value);
    setSelectedLevel1Option('');
    setSelectedLevel2Option('');
    setSelectedLevel3Option('');
    setShowButton(false);
  };

  const handleLevel1OptionChange = (value) => {
    setSelectedLevel1Option(value);
    setSelectedLevel2Option('');
    setSelectedLevel3Option('');
    setShowButton(false);
  };

  const handleLevel2OptionChange = (value) => {
    setSelectedLevel2Option(value);
    setSelectedLevel3Option('');
    setShowButton(false);
  };

  const handleLevel3OptionChange = (value) => {
    setSelectedLevel3Option(value);
    setShowButton(!!value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickersContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => handleLevelChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Level" value="" />
          <Picker.Item label="Level 1" value="Level 1" />
          <Picker.Item label="Level 2" value="Level 2" />
        </Picker>

        {selectedValue === 'Level 1' && (
          <Picker
            selectedValue={selectedLevel1Option}
            onValueChange={(itemValue) => handleLevel1OptionChange(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Option" value="" />
            <Picker.Item label="Scanning" value="Scanning" />
            <Picker.Item label="Skimming" value="Skimming" />
          </Picker>
        )}

        {selectedLevel1Option === 'Scanning' && (
          <Picker
            selectedValue={selectedLevel3Option}
            onValueChange={(itemValue) => handleLevel3OptionChange(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Resource Type" value="" />
            <Picker.Item label="Audio" value="Audio" />
            <Picker.Item label="Video" value="Video" />
            <Picker.Item label="PDF" value="PDF" />
          </Picker>
        )}

        {selectedLevel1Option === 'Skimming' && (
          <Picker
            selectedValue={selectedLevel3Option}
            onValueChange={(itemValue) => handleLevel3OptionChange(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Resource Type" value="" />
            <Picker.Item label="Audio" value="Audio" />
            <Picker.Item label="Video" value="Video" />
            <Picker.Item label="PDF" value="PDF" />
          </Picker>
        )}

        {selectedValue === 'Level 2' && (

          <Picker
            selectedValue={selectedLevel2Option}
            onValueChange={(itemValue) => handleLevel2OptionChange(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Option" value="" />
            <Picker.Item label="In-Notation" value="In-Notation" />
          </Picker>
        )}


        {selectedLevel2Option === 'In-Notation' && (

          <Picker
            selectedValue={selectedLevel3Option}
            onValueChange={(itemValue) => handleLevel3OptionChange(itemValue)}
            style={styles.picker}
          >

            <Picker.Item label="Select Resource Type" value="" />
            <Picker.Item label="Audio" value="Audio" />
            <Picker.Item label="Video" value="Video" />
            <Picker.Item label="PDF" value="PDF" />

          </Picker>

        )}

      </View>
      {/* {showButton && (
       
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
      <Text style={styles.buttonText}>Upload</Text>
    </TouchableOpacity>
     
      )} */}
      {showButton && fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
      <Button title="Select 📑" onPress={handleDocumentSelection} />

    </View>
  );
}

export default Resources;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickersContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  picker: {

    height: 20,
    width: 350,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "#e0e6f6",

  },
  button: {
    marginTop: "8%",
    backgroundColor: "#1F41BB",
    width: 180,
    height: 60
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    marginTop: "10%"
  }
});