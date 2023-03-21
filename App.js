import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [productsList, setProductsList] = useState([]);

  const onAddProduct = (newProduct) => {
    if (newProduct.length > 1) {
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
    } else {
      Alert.alert(
        // title
        "Désolé", 
        // description
        "Le nombre de caractères doit être supérieur à 1", 
        // buttons
        [
          {
            // default == OK
            text: 'COMPRIS',
            onPress: () => console.warn("Refusé"),
          },
          {
            // default == OK
            text: "D'accord",
            onPress: () => console.warn("Refusé"),
          },
          {
            // default == OK
            text: 'Yes',
            onPress: () => console.warn("Refusé"),
          }
        ],
        // options
        {
          // on peut enlever l'alerte en pressant autour
          cancelable: true,
          // message si cancelable true
          onDismiss: () => console.warn("Dismissed")
        }
      )
    }
  };

  const onRemoveProduct = (productID) => {
    setProductsList((currentProductsList) =>
      currentProductsList.filter((product) => product.id !== productID)
    );
  };

  return (
    <View style={styles.container}>
      <AddProduct onAddProduct={onAddProduct} />

      {/* <Product productsList={productsList} /> */}
      <FlatList
        data={productsList}
        renderItem={({ item }) => (
          <Product product={item} onRemoveProduct={onRemoveProduct} />
        )}
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
