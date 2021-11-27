import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../Screen/Account/Account";
import Login from "../Screen/Account/Login";
import Register from "../Screen/Account/Register";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          title: "Cuenta",
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Iniciar sesión",
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          title: "Regístrate",
        }}
      />
    </Stack.Navigator>
  );
}
