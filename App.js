import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  StatusBar,
  Button,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validateForm = () => {
    let error = {};
    if (!email) error.username = "Username is required";
    if (!password) error.password = "Password is required";
    setError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Submitted", email, password);
      setEmail("");
      setPassword("");
      setError({});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={{ width: 250, height: 250, alignSelf: "center" }}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {error.username ? (
          <Text style={styles.error}>{error.username}</Text>
        ) : null}
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error.password ? (
          <Text style={styles.error}>{error.password}</Text>
        ) : null}
        <Button title="Login" color={"plum"} onPress={() => handleSubmit()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight,
  },
  form: {
    elevation: 5,
    backgroundColor: "#f5f5f5",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    borderColor: "#",
    // borderWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 10,
    fontSize: 18,
  },
  text: {
    fontWeight: "semibold",
    fontSize: 20,
    paddingVertical: 5,
    color: "black",
  },
  error: { color: "red", marginBottom: 10 },
});
