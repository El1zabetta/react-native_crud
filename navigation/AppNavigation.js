import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../screens/HomePage";
import AddForm from "../screens/AddForm";
import Details from "../screens/Details";
import EditForm from "../screens/EditForm";
import Cart from "../screens/Cart";
import { Button } from "react-native";
import GoToCartBtn from "../components/GoToCartBtn";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: "Назад",
          headerRight: () => (
            <Button
              title="Cart"
              color="orange"
              onPress={() => <GoToCartBtn />}
            />
          ),
        }}
      >
        <Stack.Screen
          options={{ title: "Дом" }}
          name="home"
          component={HomePage}
        />
        <Stack.Screen
          options={{ title: "Форма добавления" }}
          name="add-form"
          component={AddForm}
        />
        <Stack.Screen
          options={{ title: "о продукте" }}
          name="details"
          component={Details}
        />
        <Stack.Screen
          options={{ title: "Изменить продукт" }}
          name="edit-form"
          component={EditForm}
        />
        <Stack.Screen
          options={{ title: "Корзина" }}
          name="cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
