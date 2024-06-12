import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button } from "react-native";

export default function GoToCartBtn() {
  const navigation = useNavigation();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Button
      title="cart"
      color={"orange"}
      onPress={() => navigation.navigate("cart")}
    />
  );
}
