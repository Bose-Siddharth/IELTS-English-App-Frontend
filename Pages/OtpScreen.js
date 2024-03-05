import React, { useState } from 'react'; 
import { 
    View, Text, TextInput, 
    TouchableOpacity, StyleSheet 
} from 'react-native'; 

const OtpScreen = () => { 
    const { email, password } = useState('');

    const [userInput, setUserInput] = useState(''); 
    const [isValid, setIsValid] = useState(null); 

    const validateOtp = async () => { 
      console.log('arigato gozaimasu');
        try {
            const response = await fetch('http://192.168.90.24:8080/api/auth/verifyotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: userInput, email, password }),
            });
            const data = await response.json();

            if (data.isValid) { 
                setIsValid(true); 
            } else { 
                setIsValid(false); 
            }
        } catch (error) {
            console.error('Error validating OTP:', error);
        }
    }; 

    return ( 
        <View style={styles.container}> 
            <View style={styles.box}> 
                <Text style={styles.title}> 
                    OTP Validator 
                </Text> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter OTP"
                    value={userInput} 
                    onChangeText={setUserInput} 
                />
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter Email"
                  value={email}  
                /> 
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter Password"
                  value={password}  
                  secureTextEntry={true}
                /> 
                <TouchableOpacity style={styles.button} 
                    onPress={validateOtp}> 
                    <Text style={styles.buttonText}> 
                        Validate OTP 
                    </Text> 
                </TouchableOpacity> 
                {isValid === true && 
                    <Text style={styles.validText}> 
                        Valid OTP 
                    </Text>} 
                {isValid === false && 
                    <Text style={styles.invalidText}> 
                        Invalid OTP 
                    </Text>} 
            </View> 
        </View> 
    ); 
}; 

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    box: { 
        width: '80%', 
        backgroundColor: '#FFF', 
        borderRadius: 10, 
        padding: 20, 
        shadowColor: '#000', 
        shadowOffset: { 
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5, 
    }, 
    title: { 
        fontSize: 24, 
        marginBottom: 20, 
    }, 
    button: { 
        backgroundColor: '#007AFF', 
        paddingHorizontal: 30, 
        paddingVertical: 15, 
        borderRadius: 5, 
        marginTop: 20, 
    }, 
    buttonText: { 
        color: '#FFF', 
        fontSize: 18, 
    }, 
    input: { 
        borderWidth: 1, 
        borderColor: '#007AFF', 
        borderRadius: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        marginTop: 20, 
        width: '100%', 
    }, 
    validText: { 
        fontSize: 20, 
        color: 'green', 
        marginTop: 20, 
    }, 
    invalidText: { 
        fontSize: 20, 
        color: 'red', 
        marginTop: 20, 
    }, 
}); 

export default OtpScreen;
