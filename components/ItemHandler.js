import { View, Text, StyleSheet } from "react-native";

function ItemHandler(props) {
  return (
    <View styles={styles.items}>
      <Text styles={styles.items}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "violet",
    color: "white",
    width: "100%",
  },
});

export default ItemHandler;
