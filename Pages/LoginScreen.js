import { Formik, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useLogin } from "../context/LoginProvider";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Image } from "react-native-svg";
import useHttp from "../hooks/useHttp";
// import { usePost } from "../hooks/useHttp";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const { width, height } = Dimensions.get("window");

function LoginScreen({ navigation }) {
  const { setIsLoggedIn, isLoggedIn } = useLogin();
  const [error, setError] = useState("");
  const { postRequest } = useHttp();

  async function submitHandler(values) {
    try {
      const response = await postRequest("/auth/login", values);
      console.log("API response:", response);
      if (!response.success) {
        setError(response.message || "There was an error logging in");
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("API error:", error.message);
    }
  }

  function forgotPassHandler() {
    Alert.alert("Pass Change");
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/appBg.png")}
            style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <View style={styles.headingContainer}>
              <Text style={[styles.headerText, styles.textCenter]}>
                Login Here
              </Text>
              <Text style={[styles.headerSubText, styles.textCenter]}>
                Welcome Back!
              </Text>
              <Text style={[styles.headerSubText, styles.textCenter]}>
                You've been missed
              </Text>
              {error && (
                <Text style={[styles.errorText, styles.textCenter]}>
                  {error}
                </Text>
              )}
            </View>
            <ScrollView contentContainerStyle={styles.outerFormContainer}>
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <View style={{ gap: 20, alignItems: "center" }}>
                  <Pressable
                    style={styles.forgotPassBtn}
                    onPress={forgotPassHandler}
                  >
                    <Text style={[styles.textBlue, styles.submitText]}>
                      Forgot your password?
                    </Text>
                  </Pressable>
                  <Pressable style={styles.registerBtn} onPress={handleSubmit}>
                    <Text
                      style={[
                        styles.textWhite,
                        styles.submitText,
                        styles.textUpper,
                      ]}
                    >
                      Login
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.createAccount}
                    onPress={forgotPassHandler}
                  >
                    <Text style={[styles.textGray, styles.submitText]}>
                      Create new account
                    </Text>
                  </Pressable>
                  <Text style={[styles.textBlue, styles.submitText]}>
                    Or continue with
                  </Text>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="google"
                      size={24}
                      color="#000000"
                      style={styles.icon}
                      onPress={() => {}}
                    />
                    <Icon
                      name="facebook"
                      size={24}
                      color="#000000"
                      style={styles.icon}
                      onPress={() => {}}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    resizeMode: "cover",
  },
  headingContainer: {
    height: "10%",
    marginTop: "20%",
    gap: 10,
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
    gap: 10,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 30,
  },
  headerText: {
    color: "#1F41BB",
    fontWeight: "700",
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
    borderWidth: 2,
    borderColor: "#1F41BB",
  },
  picker: {
    padding: 0,
    color: "gray",
    borderRadius: 8,
    backgroundColor: "#e0e6f6",
  },
  registerBtn: {
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.75,
    backgroundColor: "blue",
    paddingHorizontal: "8%",
    paddingVertical: "5%",
  },
  textWhite: {
    color: "white",
  },
  submitText: {
    fontWeight: "bold",
    textAlign: "center",
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
  errorText: {
    color: "red",
    // marginTop: 5,
  },
  icon: {
    backgroundColor: "#ccc",
    padding: "3%",
    width: 60,
    borderRadius: 8,
    textAlign: "center",
  },
  svgContainer: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000",
  },
  bottomLeft: {
    left: 0,
    bottom: 0,
  },
  topRight: {
    right: 0,
    top: 0,
  },
});
