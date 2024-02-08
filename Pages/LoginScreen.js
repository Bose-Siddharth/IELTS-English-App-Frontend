import { Formik, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useLogin } from "../context/LoginProvider";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function LoginScreen({ navigation }) {
  const { setIsLoggedIn } = useLogin();
  const [error, setError] = useState("");
  async function submitHandler(values) {
    // Your login logic here
    console.log(values);
    try {
      let response = await fetch("http://192.168.1.6:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      let data = await response.json();
      if (!data.success) {
        setError(data.message);
        console.log(error);
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
              <Text style={[styles.errorText, styles.textCenter]}>{error}</Text>
            )}
          </View>
          <View style={styles.outerFormContainer}>
            <ScrollView contentContainerStyle={styles.formContainer}>
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
                    Register Staff
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
                <View>
                  {/* <Icon name="rocket" size={30} color="#900" />
                  <Icon name="rocket" size={30} color="#900" />
                  <Icon name="rocket" size={30} color="#900" /> */}
                </View>
              </View>
            </ScrollView>
          </View>
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
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
