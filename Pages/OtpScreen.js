import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions
} from "react-native";

export default function OtpScreen() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setEmailError("Please enter an email!");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }

    setEmailError("");

    try {
      const data = {
        email: email,
      };
      const response = await fetch(
        "http://192.168.90.24:8080/api/auth/forgetpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",     
          },
          body: JSON.stringify(data),
        }
      );
      const parsedData = await response.json();
      console.log(parsedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/appBg.png")} style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        <View style={styles.headingContainer}>
          <Text style={[styles.headerText, styles.textCenter]}>Forget Password</Text>
          <Text style={[styles.headerSubText, styles.textCenter]}>Enter your email to get OTP and reset password.</Text>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            label="Email"
            mode="outlined"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          <Pressable
            onPress={handleResetPassword}
            style={styles.button}
          >
            <Text style={[styles.textWhite, styles.submitText, styles.textUpper]}>Forget Password</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    resizeMode: "cover",
  },
  headingContainer: {
    height: "10%",
    marginTop: "20%",
    gap: 15,
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: '400',
  },
  input: {
    padding: 12,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#e0e6f6",
    borderWidth: 2,
    borderColor: "#1F41BB",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.75,
    backgroundColor: "blue",
    paddingHorizontal: "9%",
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
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
