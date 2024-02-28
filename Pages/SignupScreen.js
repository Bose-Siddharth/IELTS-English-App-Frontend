import { Picker } from "@react-native-picker/picker";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useLogin } from "../context/LoginProvider";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalStyles } from "../colorPalette/color";
import useHttp from "../hooks/useHttp";

function SignupScreen({ navigation }) {
  const { setIsLoggedIn } = useLogin();
  const [error, setError] = useState("");
  const { postRequest } = useHttp();
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    mobileNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Enter a valid mobile number")
      .required("Mobile number is required"),
    department: yup.string().required("Department is required"),
  });
  async function handleSubmit(values) {
    try {
      const response = await postRequest("/auth/signup", values);
      // console.log("API response:", response);
      if (!response.success) {
        setError(response.message || "There was an error signing in");
      } else {
        await AsyncStorage.setItem("token", response.token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("API error:", error.message);
    }
  }
  async function handleSubmit(values) {
    try {
      const { token } = await postRequest("/auth/signup", values);
      console.log("API response:", token);
      // const token = response.token;
      if (!response.success) {
        setError(response.message || "There was an error signing in");
      } else {
        await AsyncStorage.setItem("token", token);
        console.log("Token", AsyncStorage.getItem("token"));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("API error:", error.message);
    }
  }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
        department: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
            <ScrollView contentContainerStyle={styles.outerFormContainer}>
              <View style={styles.headingContainer}>
                <Text style={[styles.headerText, styles.textCenter]}>
                  Create your profile
                </Text>
                <Text style={[styles.headerSubText, styles.textCenter]}>
                  Enter your details to create and account
                </Text>
                {error && (
                  <Text style={[styles.errorText, styles.textCenter]}>
                    {error}
                  </Text>
                )}
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                {/* Repeat this pattern for other TextInput fields */}
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                {/* Repeat this pattern for other TextInput fields */}

                {/* Repeat this pattern for other TextInput fields */}
                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  onChangeText={handleChange("mobileNumber")}
                  onBlur={handleBlur("mobileNumber")}
                  value={values.mobileNumber}
                  keyboardType="numeric"
                />
                {touched.mobileNumber && errors.mobileNumber && (
                  <Text style={styles.errorText}>{errors.mobileNumber}</Text>
                )}

                {/* Repeat this pattern for other TextInput fields */}
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <View style={[styles.input, styles.picker]}>
                  <Picker
                    selectedValue={values.department}
                    onValueChange={(itemValue) =>
                      handleChange("department")(itemValue)
                    }
                  >
                    <Picker.Item
                      label="Select Department"
                      value=""
                      color="#696a72"
                    />
                    <Picker.Item
                      label="Department 1"
                      value="Department 1"
                      color="#696a72"
                    />
                    <Picker.Item
                      label="Department 2"
                      value="Department 2"
                      color="#696a72"
                    />
                    <Picker.Item
                      label="Department 3"
                      value="Department 3"
                      color="#696a72"
                    />
                  </Picker>
                </View>
                {touched.department && errors.department && (
                  <Text style={styles.errorText}>{errors.department}</Text>
                )}

                <Pressable style={styles.registerBtn} onPress={handleSubmit}>
                  <Text style={[styles.textWhite, styles.submitText]}>
                    Register
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bgColor,
  },
  headingContainer: {
    height: "10%",
    marginTop: "20%",
  },
  outerFormContainer: {
    flex: 1,
    paddingHorizontal: "2%",
    // marginTop: "3%",
    // gap: 10,
  },
  formContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "80%",
    width: "100%",
    gap: 15,
    paddingTop: "10%",
  },
  headerText: {
    color: GlobalStyles.colors.primary100,
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "uppercase",
  },
  textCenter: {
    textAlign: "center",
  },
  headerSubText: {
    fontSize: 16,
  },
  input: {
    padding: 16,
    width: "80%",
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary100,
  },
  picker: {
    padding: 0,
    color: GlobalStyles.colors.subheading50,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  registerBtn: {
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: "8%",
    paddingVertical: "5%",
    marginTop: Keyboard.isVisible ? null : "auto",
    marginBottom: Keyboard.isVisible ? null : "20%",
  },
  textWhite: {
    color:GlobalStyles.colors.buttonTextPrimary100,
  },
  submitText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  errorText: {
    color: GlobalStyles.colors.warning,
    // marginTop: 5,
  },
});
