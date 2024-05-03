import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./screens/Signup";
import Home from "./screens/Home";

import Map from "./screens/Map";
import Notification from "./screens/Notification";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./screens/Cart";
import { Feather, Ionicons } from "@expo/vector-icons";
import chat from "./screens/chat";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Bottomtabs} options={{headerShown:false}} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="chat" component={chat} />
        
        <Stack.Screen name="Map" component={Map} />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  function Bottomtabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          tabBarStyle: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Home",
            headerStyle: {
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
              height: 100,
            },
            tabBarIcon: () => <Feather name="home" color={"black"} size={24} />,
            headerLeft: () => {},
          }}
        />
        <Tab.Screen
          name="chat"
          component={chat}
          options={{
            tabBarIcon: () => (
              <Ionicons name="chatbox-outline" color={"black"} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerStyle: {
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
              height: 100,
            },
            tabBarIcon: () => (
              <Ionicons
                name="notifications-outline"
                color={"black"}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: () => (
              <Ionicons name="location-outline" color={"black"} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: () => (
              <Ionicons name="cart-outline" color={"black"} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
