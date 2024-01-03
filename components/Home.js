import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
  Pressable,
  Modal,
} from "react-native";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Questions-bro.png")}
        style={{ width: 300, height: 300 }}
      />
      <Button title="Welcome" style={styles.btn} color={"#08e646"} />
      <Pressable onLongPress={() => setIsModal(true)}>
        <Text>Login</Text>
      </Pressable>
      <Modal visible={isModal}>
        <View>
          <Text>This is a modal</Text>
          <Button
            title="Close"
            style={styles.btn}
            onPress={() => setIsModal(false)}
          />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: "5",
  },
});
