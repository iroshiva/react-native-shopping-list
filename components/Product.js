import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Product = ({ product }) => {
  return (
    <View style={styles.productItems}>
      <Text style={styles.item}>{product.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productItems: {
    marginTop: 10,
  },
  item: {
    backgroundColor: "#ffb6c1",
    padding: 20,
    // marginTop && marginBottom
    marginVertical: 10,
    fontSize: 17,
  },
});

export default Product;
