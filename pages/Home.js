import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import ListItems from "../components/ListItems";
import Header from "../components/Header";
import AddItem from "../components/AddItem";

export const createAlert = (title, msg) => {
  Alert.alert(
    title,
    msg,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: true }
  );
};

const deleteItem = (id) => {
  setItems((prevItems) => {
    return prevItems.filter((item) => item.id != id);
  });
};

const addItem = (text) => {
  if (!text) {
    createAlert("Error", "Please enter a item");
  } else {
    setItems((prevItems) => {
      return [{ id: Math.random(100), text }, ...prevItems];
    });
  }
};
export default function Home() {
  const [items, setItems] = useState([
    { id: 1, text: "Abril" },
    { id: 2, text: "Mayo" },
    { id: 3, text: "Junio" },
    { id: 4, text: "Julio" },
    { id: 5, text: "Agosto" },
  ]);
  return (
    <View style={styles.container}>
      <Header title="Bag Coins"></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItems item={item} deleteItem={deleteItem}></ListItems>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
