import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email,setEmail] =useState(null);
  const [password, setPassword] = useState(null);
const navigation=useNavigation();
const signuup=()=>{
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   alert("signup Successfully");
   navigation.navigate(Login);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

  return (
    <View style={styles.container}>
      <Image source={require("../assets/store.png")} />
      <LinearGradient colors={["#F5F2F2", "#149074"]} style={styles.lcontaner}>
        <View style={styles.textview}>
          <TextInput
            style={styles.textinput}
            placeholder="Email or Phone Number"
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            onChangeText={setPassword}
          ></TextInput>
        </View>
      
      <TouchableOpacity>
        <Text style={styles.btn} onPress={()=>signuup()}>Signup</Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row",alignSelf:"center", marginBottom:90}}>
        <Text>Already have Account?</Text>
        <Text onPress={()=>navigation.navigate(Login)}>Login</Text>
      </View>
      </LinearGradient>
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#149074",
  },
  lcontaner: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  textview: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  textinput: {
    paddingHorizontal: 25,
    backgroundColor: "#149074",
    height: 60,
    width: 250,
    marginBottom: 20,
    borderRadius: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#18F60C",
    height: 50,
    width: 140,
    alignSelf: "center",
//    marginBottom: 100,
    textAlign: "center",
    borderRadius: 15,
    paddingTop: 12,
    fontWeight: "bold",
    
  },
});
