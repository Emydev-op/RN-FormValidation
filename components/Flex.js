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
import Box from "./Box";

export default function Flex() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", flex: 2 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f", flex: 2 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56", flex: 2 }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    marginTop: 60,
    borderColor: "red",
    borderWidth: 6,
    justifyContent: "center",
    gap: 8,
  },
});
