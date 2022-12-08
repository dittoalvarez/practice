import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import InputController from "./components/InputController";
import ItemHandler from "./components/ItemHandler";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [arrayItem, setArrayItem] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelToCloseModal() {
    setModalIsVisible(false);
  }

  function addGoalHandler(inputGoal) {
    setArrayItem((newArrayItem) => [
      ...newArrayItem,
      { text: inputGoal, id: Math.random().toString() },
    ]);
    cancelToCloseModal();
  }
  return (
    <>
      <StatusBar />
      <View style={styles.mainContainer}>
        <Button
          title="Add New Goal"
          color="purple"
          onPress={startAddGoalHandler}
        />
        <InputController
          visible={modalIsVisible}
          onAddButton={addGoalHandler}
          onCancel={cancelToCloseModal}
        />
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
    </>
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
