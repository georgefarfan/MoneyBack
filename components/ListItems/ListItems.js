import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function ListItems() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Type here ... !!!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    color: "#393e46",
  },
  search: {
    height: 40,
  },
});
