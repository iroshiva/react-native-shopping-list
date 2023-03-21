import { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const inputHandler = (val) => {
    setProduct(val);
  };

  // permet de vider le contenu de l'input ET passer le produit ajouter au composant parent via la props onAddProduct
  const handleClick = () => {
    onAddProduct(product);
    setProduct("");
  };

  useEffect(() => {
    if(product.length > 0){
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [product])

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        value={product}
        onChangeText={inputHandler}
      />
      {/* { Remplace le <Button> si besoin de style custom } : Button ne prend pas d'argument style */}
      <Pressable style={[styles.button, {backgroundColor: isDisabled ? "#607D8B" : "black" }]} onPress={handleClick} disabled={isDisabled}>
        <Text style={styles.textButton}>Valider</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderTopEndRadius: 7,
    borderBottomEndRadius: 7,
    // elevation: 3,
    backgroundColor: "black",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    borderRightWidth: 0,
    padding: 5,
    paddingLeft: 10,
    fontSize: 18,
    // va occuper tout l'espace restant quand élément parent est en flex-direction: row
    flexGrow: 1,
  },
});

export default AddProduct;
