import React, { useContext } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { productsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function HomePage({ navigation }) {
  const { products, getProducts } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.addBtnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("add-form")}
          style={goToAddFormBtn}
        >
          <Text style={styles.goToAddFormBtn.text}>Добавить продукт</Text>
        </TouchableOpacity>

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          horizontal
          contentInset={{ bottom: 200 }}
          contentContainerStyle={styles.cardParent}
        >
          {products.map((item) => (
            <ProductCard key={item.id} oneProduct={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  goToAddFormBtn: {
    backgroundColor: "orange",
    paddingHorizontal: 35,
    paddingVertical: 15,
    maxWidth: 200,
    borderRadius: 20,
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  addBtnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  cardParent: {
    gap: 20,
    marginTop: 50,
    flex: 1,
  },
});
