import React from 'react';
import { View, Text, Button } from 'react-native';
const Button = ({ navigation }) 
function Button(){
    return (
        <View>
            <Text>Button</Text>
            <Button title="Login"
                    onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
    }
export default Button; 