import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Search from "../Search/Search";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Search></Search>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    color: "#393e46",
  },
});
