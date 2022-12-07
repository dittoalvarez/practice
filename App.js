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
import InputController from "./components/InputController";
import ItemHandler from "./components/ItemHandler";

export default function App() {
  const [arrayItem, setArrayItem] = useState([]);

  function addGoalHandler(inputGoal) {
    setArrayItem((newArrayItem) => [
      ...newArrayItem,
      { text: inputGoal, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.mainContainer}>
      <InputController onAddButton={addGoalHandler} />
      <View style={styles.bottomContainer}>
        <FlatList
          data={arrayItem}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return <ItemHandler text={itemData.item.text} />;
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

  bottomContainer: {
    flex: 6,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
});
