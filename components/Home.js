import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Search from "./Search";
import ListItems from "./ListItems";

export default function Home() {
  return (
    <View style={styles.container}>
      <Search></Search>
      <FlatList
        data={[
          { key: "Juan Perez", color: "alert" },
          { key: "Pedro Alvarez", color: "warning" },
          { key: "Carlos Guzman", color: "info" },
        ]}
        renderItem={({ item }) => (
          <Text style={styles[item.color]}>{item.key}</Text>
        )}
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
  alert: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d92027",
  },
  info: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1b6ca8",
  },
  warning: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fb7813",
  },
  message: {
    fontSize: 260,
    fontSize: 16,
    color: "#393e46",
  },
});
