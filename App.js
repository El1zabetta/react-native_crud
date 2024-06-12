import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./navigation/AppNavigation";
import ProductsContextProvider from "./context/ProductsContext";
import CartContextProvider from "./context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <AppNavigation />
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
