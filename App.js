import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Money Back"></Header>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});
