import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState,useEffect } from "react";
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import MapView from "react-native-maps";
const Map = () => {
  const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
  return (
    <View style={{ flex: 1 }}>
      <MapView
        showsMyLocationButton={true}
        showsUserLocation={true}
        style={{ height: "50%", width: "100%", marginTop: 25 }}
        initialRegion={{
                    "latitude": 39.97343096953564,
                    "latitudeDelta": 0.0922,
                    "longitude": -75.12520805829233,
                    "longitudeDelta": 0.0421,
                }}
      >
        <Marker 
          title="Faisalabad"
                    description="Web Design and Development"
                    coordinate={{"latitude":31.4504,"longitude":73.1350}}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
