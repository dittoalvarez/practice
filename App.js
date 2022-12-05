import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [arrayItem, setArrayItem] = useState([]);

  function inputHandler(inputValue) {
    setInputGoal(inputValue);
  }

  function addGoalHandler() {
    setArrayItem((e) => [...arrayItem, inputGoal]);
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Text..."
          onChangeText={inputHandler}
        />
        <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
          <Text>Add Button</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        {arrayItem.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    marginVertical: 5,
    paddingVertical: 5,
  },
  button: {
    width: "20%",
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    paddingBottom: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 6,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
