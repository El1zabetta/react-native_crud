import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { productsContext } from "../contexts/ProductsContext";
import ModalConfirmDelete from "../components/ModalConfirmDelete";
import { useNavigation } from "@react-navigation/native";

export default function Details({ route }) {
  const { getOneProduct, deleteProduct, oneProduct } =
    useContext(productsContext);
  const [loading, setLoading] = useState(true);
  const [modalConfirm, setModalConfirm] = useState(false);

  const naviagtion = useNavigation();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      await getOneProduct(route.params.id);
      setLoading(false);
    }

    if (route.params.id) {
      fetchProduct();
    }
  }, [route.params.id]);

  async function handleDelete() {
    await deleteProduct(route.params.id);
    setModalConfirm(false);
    naviagtion.navigate("home");
  }

  async function handleEdit() {
    naviagtion.navigate("edit-form", oneProduct);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>{oneProduct.title}</Text>
        <Image source={{ uri: oneProduct.image }} style={styles.image} />
        <View style={styles.btnGroup}>
          <TouchableOpacity
            onPress={() => setModalConfirm(true)}
            style={[styles.btn, { backgroundColor: "red" }]}
          >
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleEdit}
            style={[styles.btn, { backgroundColor: "green" }]}
          >
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </>
      <ModalConfirmDelete
        modalConfirm={modalConfirm}
        setModalConfirm={setModalConfirm}
        handleDelete={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: "80%",
    height: 300,
  },
  btn: {
    paddingHorizontal: 45,
    paddingVertical: 13,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnGroup: {
    flexDirection: "row",
    gap: 20,
    marginTop: 50,
  },
});
