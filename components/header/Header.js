import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 15,
    backgroundColor: "#3b6978",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
  },
});
