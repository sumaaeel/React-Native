import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getFirestore } from "firebase/firestore";
import { Auth } from "firebase/auth";
const Home =  () => {



  return (
    <View style={{ flex: 1, backgroundColor: "#149074" }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
        }}
      >
        What's on your shopping list today?
      </Text>
      <View
        style={{
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "white",
          flexDirection: "row",
          borderRadius: 20,
          height: 40,
          width: 230,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TextInput style={{ marginLeft: 10 }} placeholder="Search" />
        <Ionicons
          name="search"
          color={"black"}
          size={20}
          style={{ marginRight: 10 }}
        />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({});
