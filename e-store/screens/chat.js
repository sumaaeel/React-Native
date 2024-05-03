import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import {
  addDoc,
  getFirestore,
  collection,
  serverTimestamp,
  query,
  onSnapshot,
} from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase";
const Chat = () => {
  // const email = getAuth().currentUser.email;
  const [message, setmessage] = useState(null);
  // const db = getFirestore(app);
  // const [chat , setchat] = useState([]);
   let currentUser = "Nasir Ali";
  const data = [
    {
      message: "Hi",
      messagefrom: "Nasir Ali",
    },
    {
      message: "Hello",
      messagefrom: "adeel",
    },
    {
      message: "How are you",
      messagefrom: "Mateen",
    },
   ];
  // const onsendpressed = async () => {
  //   try {
  //     await addDoc(collection(db, "users"), {
  //       messagefrom: email,
  //       message,
  //       time: serverTimestamp(),
  //     });
  //     setmessage("");
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   useEffect(() => {
  //     const q = query(collection(db, "users"), );
  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       const users = [];
  //       querySnapshot.forEach((doc) => {
  //         users.push(doc.data());
  //       });
  //       setchat(chat)

  //     });
  //   }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={
                item.messagefrom == message
                  ? {
                      ...styles.card,
                      backgroundColor: "white",
                      alignSelf: "flex-end",
                    }
                  : styles.card
              }
            >
              <Text>{item.messagefrom}</Text>
              <Text>{item.message}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.messagefrom}
      />
      <View style={styles.row}>
        <Input placeholder="write your Message" />
        <Button title="Send" onPress={() => onsendpressed()} />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#149074",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  card: {
    backgroundColor: "gray",
    width: "50%",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});