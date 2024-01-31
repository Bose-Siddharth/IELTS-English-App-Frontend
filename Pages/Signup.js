import { View,Button,Text } from "react-native";
const Signup = ({ navigation })
function Signup() {
    return (
        <view>
        <Text>Signup</Text>
        <Button title="Log out"
                    onPress={() => navigation.navigate('Login')}
                    />
        </view>
    )
}

export default Signup;


