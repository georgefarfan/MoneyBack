import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item ..."
        style={styles.input}
        onChangeText={onChange}
      ></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} style={styles.icon}></Icon>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

AddItem.defaultProps = {};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 12,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 16,
    textAlign: "center",
  },
});

export default AddItem;
