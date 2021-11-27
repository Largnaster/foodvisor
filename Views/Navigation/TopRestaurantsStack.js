import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../Screen/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="topRestaurants"
        component={TopRestaurants}
        options={{
          title: "Restaurantes más votados",
        }}
      />
    </Stack.Navigator>
  );
}
