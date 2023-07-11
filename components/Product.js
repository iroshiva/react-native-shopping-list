import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/colors";

const Product = ({ product, onRemoveProduct }) => {
  return (
    <View style={styles.productItems}>
      <Text style={styles.item}>{product.name}</Text>
      <Pressable onPress={() => onRemoveProduct(product.id)}>
        <Entypo name="cross" size={30} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  productItems: {
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    marginHorizontal: 10,
    fontSize: 20,
  },
});

export default Product;
