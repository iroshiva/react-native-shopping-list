import { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
} from "react-native";
import ButtonComponent from "./ButtonComponent";
import Colors from "../constants/colors";
import InputComponent from "./InputComponent";
import BodyText from "./BodyText";
import AppStyles from "../constants/AppStyles";

const AddProduct = ({
  onAddProduct,
  isModalAddProduct,
  setIsModalAddProduct,
}) => {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    // vérification d'entrée de l'input
    // filtre l'input en n'acceptant que les lettres et NON les chiffres
    const regex = /[^a-z]/gi;
    setProduct(val.replace(regex, ''));
  };

  // permet de vider le contenu de l'input ET passer le produit ajouter au composant parent via la props onAddProduct
  const handleClick = () => {
    onAddProduct(product);
    setProduct("");
  };

  return (
    <Modal
      visible={isModalAddProduct}
      animationType="slide"
      hardwareAccelerated
    >
      <View style={styles.inputContainer}>
        <BodyText style={{textAlign: "center"}}>Veuillez entrer votre produit</BodyText>
        <InputComponent 
          style={styles.textInput} 
          textPlaceholder="Nouveau produit"
          onChangeHandler={inputHandler}
          value={product}
          maxLength={10}
          // keyboardType="numeric"
        />
        <View style={styles.btnContainer}>
            <ButtonComponent handleClick={handleClick} style={styles.btnBlue}>Valider</ButtonComponent>

            <ButtonComponent handleClick={() => setIsModalAddProduct(false)} style={styles.btnRed}>
              Annuler
            </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: 30,
    justifyContent: "center",
    padding: 25,
  },
  textInput: {
    textAlign: "center",
    fontSize: 19,
    marginBottom: 20,
    // borderRadius: 30,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBlue: {
    backgroundColor: Colors.lightgreen,
    width: 150,
    borderRadius: 6
  },
  btnRed: {
    backgroundColor: Colors.red,
    width: 150,
    borderRadius: 6
  }
});

export default AddProduct;
