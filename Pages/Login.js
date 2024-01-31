import { View,Button, Text } from "react-native";
const Login = ({navigation})
function Login() {
    return (
        <view>
        <Text>Login</Text>
        <Button title="Login"
                    onPress={() => navigation.navigate('Signup')}
            />
            <Button title="Button"
                    onPress={() =>
                        navigation.navigate('Button')}
            />
        </view>
    )
}

export default Login;