import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
  title: "Money Back",
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 20,
    backgroundColor: "#3b6978",
  },
  title: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
