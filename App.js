import { useState } from "react";
import uuid from "react-native-uuid";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [productsList, setProductsList] = useState([]);

  const onAddProduct = (newProduct) => {
    // plus secure de faire une callback fn dans le setter
    setProductsList((currentProductsList) => [
      // on récupère les products déjà existant
      ...currentProductsList,
      // on ajoute le nouveau produit
      {
        id: uuid.v4(),
        name: newProduct,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <AddProduct onAddProduct={onAddProduct} />

      {/* <Product productsList={productsList} /> */}
      <FlatList
        data={productsList}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
});
