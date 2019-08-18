import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView, Marker} from 'react-native-maps'
export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
        
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left : 0,
    right : 0,
    bottom : 0,
    justifyContent : "felx-end",
    alignItems : "center"
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
  
});
