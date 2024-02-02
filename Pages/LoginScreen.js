import { Picker } from "@react-native-picker/picker";
import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import { Icon } from "react-native-vector-icons/Icon";

function LoginScreen({ auth, setAuth, navigation }) {
  function submitHandler() {
    setAuth(false);
    navigation.navigate("Home");
  }
  function forgotPassHandler() {
    Alert.alert("Pass Change");
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={[styles.headerText, styles.textCenter]}>Login Here</Text>
        <Text style={[styles.headerSubText, styles.textCenter]}>
          Welcome Back!
        </Text>
        <Text style={[styles.headerSubText, styles.textCenter]}>
          You've been missed
        </Text>
      </View>
      <View style={styles.outerFormContainer}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextInput
          />
          <View style={{ gap: 20, alignItems: "center" }}>
            <Pressable style={styles.forgotPassBtn} onPress={forgotPassHandler}>
              <Text style={[styles.textBlue, styles.submitText]}>
                Forgot your password?
              </Text>
            </Pressable>
            <Pressable style={styles.registerBtn} onPress={submitHandler}>
              <Text
                style={[styles.textWhite, styles.submitText, styles.textUpper]}
              >
                Register Staff
              </Text>
            </Pressable>
            <Pressable style={styles.createAccount} onPress={forgotPassHandler}>
              <Text style={[styles.textGray, styles.submitText]}>
                Create new account
              </Text>
            </Pressable>
            <Text style={[styles.textBlue, styles.submitText]}>
              Or continue with
            </Text>
            <View>
              {/* <Icon name="rocket" size={30} color="#900" />
            <Icon name="rocket" size={30} color="#900" />
            <Icon name="rocket" size={30} color="#900" /> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headingContainer: {
    height: "10%",
    marginTop: "20%",
  },
  outerFormContainer: {
    flex: 1,
    paddingHorizontal: "2%",
    marginTop: "15%",
    gap: 10,
  },
  formContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "80%",
    width: "100%",
    gap: 40,
  },
  headerText: {
    color: "#1F41BB",
    fontWeight: 700,
    fontSize: 24,
    textTransform: "uppercase",
  },
  textCenter: {
    textAlign: "center",
  },
  headerSubText: {
    fontSize: 18,
    fontWeight: 600,
  },
  input: {
    padding: 16,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#e0e6f6",
  },
  picker: {
    padding: 0,
    color: "gray",
    borderRadius: 8,
    backgroundColor: "#e0e6f6",
  },
  registerBtn: {
    borderRadius: 10,
    backgroundColor: "blue",
    paddingHorizontal: "8%",
    paddingVertical: "5%",
  },
  textWhite: {
    color: "white",
  },
  submitText: {
    fontWeight: "bold",
  },
  textUpper: {
    textTransform: "uppercase",
  },
  textBlue: {
    color: "blue",
  },
  textGray: {
    color: "gray",
  },
  forgotPassBtn: {
    fontStyle: "italic",
  },
});
