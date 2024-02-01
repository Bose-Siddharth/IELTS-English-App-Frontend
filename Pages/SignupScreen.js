import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Picker,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpScreen = () => {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Mobile must contain only numbers")
      .length(10, "Mobile must be exactly 10 digits")
      .required("Mobile is required"),
    department: Yup.string().required("Department is required"),
  });

  const checkUsernameAvailability = (username) => {
    setTimeout(() => {
      setIsUsernameAvailable(username.trim() !== "" && !username.includes(" "));
    }, 1000);
  };

  const handleUsernameChange = (username) => {
    checkUsernameAvailability(username);
  };

  const handleRegisterPress = () => {
    setIsUsernameAvailable(false);
    Keyboard.dismiss();
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={handleContainerPress}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            mobile: "",
            department: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setIsUsernameAvailable(false);
            actions.resetForm();
          }}
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
              <View style={styles.main}>
                <Text style={styles.heading}>Create Staff Profile</Text>
                <Text style={styles.heading1}>
                  Create a Profile for Staff to Manage All Activities
                </Text>
              </View>
              <View style={styles.main1}>
                <TextInput
                  style={[styles.input, { width: "100%", height: 50 }]}
                  placeholder="Name"
                  onChangeText={(username) => {
                    handleChange("username")(username);
                    handleUsernameChange(username);
                  }}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
                {isUsernameAvailable && (
                  <Text style={styles.success}>Username is available</Text>
                )}
                {errors.username && touched.username && (
                  <Text style={styles.error}>{errors.username}</Text>
                )}

                <TextInput
                  style={[styles.input1, { width: "100%", height: 50 }]}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}

                <TextInput
                  style={[styles.input1, { width: "100%", height: 50 }]}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}

                <TextInput
                  style={[styles.input1, { width: "100%", height: 50 }]}
                  placeholder="Mobile Number"
                  onChangeText={handleChange("mobile")}
                  onBlur={handleBlur("mobile")}
                  value={values.mobile}
                  keyboardType="numeric"
                />
                {errors.mobile && touched.mobile && (
                  <Text style={styles.error}>{errors.mobile}</Text>
                )}
              </View>
              <Picker
                selectedValue={values.department}
                style={[
                  styles.input,
                  { width: "90%", height: 50, borderWidth: 0 },
                ]}
                onValueChange={handleChange("department")}
              >
                <Picker.Item label="Select Department" value="" />
                <Picker.Item label="Department 1" value="Department 1" />
                <Picker.Item label="Department 2" value="Department 2" />
                <Picker.Item label="Department 3" value="Department 3" />
              </Picker>
              {errors.department && touched.department && (
                <Text style={styles.error}>{errors.department}</Text>
              )}

              <TouchableOpacity
                style={[styles.button, { elevation: 5 }]}
                onPress={handleSubmit}
              >
                <Text style={styles.btext}>Register Staff</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderRadius: 9,
    paddingHorizontal: 20,
    marginBottom: "4%",
    color: "#626262",
    marginTop: "8%",
    backgroundColor: "#F1F4FF",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: "7%",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 30,
    marginBottom: "2%",
    marginTop: "1%",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#1F41BB",
    width: "100%",
  },
  main: {
    width: "83%",
  },
  main1: {
    width: "80%",
  },
  heading1: {
    fontSize: 16,
    marginBottom: "3%",
    marginTop: "2%",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black",
    marginLeft: "2%",
    width: "100%",
  },
  input1: {
    width: "100%",
    height: 40,
    borderRadius: 9,
    paddingHorizontal: 20,
    marginBottom: "4%",
    backgroundColor: "white",
    marginTop: "8%",
    backgroundColor: "#F1F4FF",
    color: "#626262",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#1F41BB",
    height: 50,
    width: 230,
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
  },
  btext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  error: {
    color: "red",
    marginBottom: "1%",
  },
  success: {
    color: "green",
    marginBottom: "1%",
  },
});
