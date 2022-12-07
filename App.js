import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [arrayItem, setArrayItem] = useState([]);

  function inputHandler(inputValue) {
    setInputGoal(inputValue);
  }

  function addGoalHandler() {
    setArrayItem((newArrayItem) => [
      ...newArrayItem,
      { text: inputGoal, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput placeholder="Enter Text..." onChangeText={inputHandler} />
        </View>

        <View style={styles.button}>
          <TouchableOpacity title={"Add Button"} onPress={addGoalHandler}>
            <Text>Add Button</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={arrayItem}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View>
                <Text>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-around",
    margin: 20,
    padding: 10,
  },
  input: {
    flex: 2,
    width: "70%",
    justifyContent: "center",
    marginVertical: 2,
    paddingVertical: 2,
    borderWidth: 1,
  },
  button: {
    //width: "20%",
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    marginVertical: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
    width: "100%",
  },
  items: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "violet",
    color: "white",
    width: "100%",
  },
});
