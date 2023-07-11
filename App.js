
import { useCallback, useEffect, useState } from "react";
import uuid from "react-native-uuid";
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import DissmissKeyboard from "./components/DissmissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  // chargement des fonts
  const [fontsLoaded] = useFonts({
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
  });
  const [productsList, setProductsList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAddProduct, setIsModalAddProduct] = useState(false);

  useEffect(() => {
    console.log('Open modal add product')
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  const onAddProduct = (newProduct) => {
    setIsModalAddProduct(false);
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
      setIsModalVisible(true);
    }

    console.table(productsList)
  };

  const onRemoveProduct = (productID) => {
    setProductsList((currentProductsList) =>
      currentProductsList.filter((product) => product.id !== productID)
    );
  };

  const onAddProductModalBtn = () => {

    setIsModalAddProduct(true);
  };

  return (
    <DissmissKeyboard>
      <ImageBackground
        source={require("./assets/metal-bg.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Header />
        <View style={styles.container}>
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            animationType="slide"
            hardwareAccelerated
            transparent
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Oups !</Text>
                </View>
                <View style={styles.modalBody}>
                  <Image
                    style={styles.crossIcon}
                    source={require("./assets/cross.png")}
                  />

                  <Text style={styles.modalBodyText}>
                    Merci d'indiquer plus d'un seul caractère.
                  </Text>
                </View>
                <View style={styles.modalFooter}>
                  <Pressable
                    style={styles.modalFooterBtn}
                    onPress={() => setIsModalVisible(false)}
                  >
                    <Text style={styles.modalFooterText}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <ButtonComponent
            handleClick={onAddProductModalBtn}
            style={styles.addProductBtn}
          >
            Nouveau Produit
          </ButtonComponent>
          {isModalAddProduct && (
            <AddProduct
              onAddProduct={onAddProduct}
              isModalAddProduct={isModalAddProduct}
              setIsModalAddProduct={setIsModalAddProduct}
            />
          )}

          <FlatList
            data={productsList}
            renderItem={({ item }) => (
              <Product product={item} onRemoveProduct={onRemoveProduct} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ImageBackground>
    </DissmissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    backgroundColor: Colors.white,
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  },
  modalHeaderText: {
    color: Colors.grey,
    fontSize: 17,
  },
  modalBody: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 20,
  },
  modalBodyText: {
    fontSize: 17,
  },
  crossIcon: {
    width: 80,
    height: 80,
  },
  modalFooter: {
    width: "100%",
  },
  modalFooterBtn: {
    backgroundColor: Colors.lightgreen,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalFooterText: {
    fontSize: 17,
    color: Colors.white,
    textAlign: "center",
    padding: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  addProductBtn: {
    backgroundColor: Colors.black,
    marginBottom: 30,
    // borderRadius: 30,
    // borderWidth: 3,
    // borderColor: Colors.white,
  },
});
