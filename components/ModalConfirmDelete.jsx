import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ModalConfirmDelete({
  modalConfirm,
  setModalConfirm,
  handleDelete,
}) {
  const displayValue = modalConfirm ? "flex" : "none";
  return (
    <View style={[styles.container, { display: displayValue }]}>
      <View style={styles.containerInner}>
        <View style={styles.textParent}>
          <Text style={styles.firstText}>Подтверждение удаления</Text>
          <Text style={styles.secondText}>
            Вы действительно хотите уадлить этот продукт без возможности его
            востановления
          </Text>
        </View>
        <View style={styles.container}>
          <>
            <Text style={styles.title}>{oneProduct.title}</Text>
            <Image source={{ uri: oneProduct.image }} style={styles.image} />
            <View style={styles.btnGroup}>
              <TouchableOpacity
                onPress={() => setModalConfirm(false)}
                style={[styles.btn, { backgroundColor: "skyblue" }]}
              >
                <Text style={styles.btnText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                style={[styles.btn, { backgroundColor: "red" }]}
              >
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    backgroundColor: " #00000090",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textParent: {
    maxWidth: "80%",
    gap: 10,
  },
  firstText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  containerInner: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
  },
});
