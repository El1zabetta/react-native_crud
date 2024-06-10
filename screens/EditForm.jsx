import React, { useContext } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { productsContext } from "../context/ProductsContext";

export default function EditForm({ navigation, route }) {
  const { editProduct, getOneProduct, oneProduct } =
    useContext(productsContext);
  const [img, setImg] = useState(route.params.img);
  const [title, setTitle] = useState(route.params.title);
  const [info, setInfo] = useState(route.params.info);
  const [price, setPrice] = useState(route.params.price.toString());

  function handleClick() {
    let newProduct = {
      img,
      title,
      info,
      price: +price,
    };
    if (!img.trim() || !title.trim() || !info.trim() || !price.trim()) {
      return Alert.alert("Заполните все поля!");
    }
    editProduct(newProduct, route.params.id);
    getOneProduct(route.params.id);
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessable={false}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView contentContainerStyle={styles.form}>
            <TextInput
              value={img}
              onChangeText={(e) => setImg(e)}
              style={styles.form.input}
              placeholder="Вставьте ссылку для картинки"
            />
            <TextInput
              value={title}
              onChangeText={(e) => setTitle(e)}
              style={styles.form.input}
              placeholder="Для названия продукта"
            />
            <TextInput
              value={info}
              onChangeText={(e) => setInfo(e)}
              style={styles.form.input}
              placeholder="Для описания"
            />
            <TextInput
              value={price}
              onChangeText={(e) => setPrice(e)}
              style={styles.form.input}
              placeholder="Введите цену товара"
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleClick}>
              <Text>Изменить продукт</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    gap: 10,
    marginHorizontal: "auto",
    paddingTop: 200,
    input: {
      width: 300,
      maxWidth: 20,
      borderRadius: 10,
    },
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: "white",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});
