import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import { uuid } from "uuidv4";
import { FlatList } from "react-native-gesture-handler";
import ListItems from "./components/ListItems";
import AddItem from "./components/AddItem";

export const createAlert = (title, msg) => {
  Alert.alert(
    title,
    msg,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: true }
  );
};

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Abril" },
    { id: 2, text: "Mayo" },
    { id: 3, text: "Junio" },
    { id: 4, text: "Julio" },
    { id: 5, text: "Agosto" },
  ]);

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

  return (
    <View style={styles.container}>
      <Header title="Money Back"></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItems item={item} deleteItem={deleteItem}></ListItems>
        )}
      ></FlatList>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
