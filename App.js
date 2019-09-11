import React from 'react'
import { StyleSheet, View , Text , Button ,Image} from 'react-native'
import MapStyle from  './Components/map'
import icon from './assets/icon.png';
import MapView, { Marker , PROVIDER_GOOGLE } from 'react-native-maps' 
import Modal from "react-native-modal"
import { requireNativeViewManager } from '@unimodules/core';
export default class App extends React.Component {
  images = [
    require("./assets/accident.png"),
    require("./assets/travaux.png"),
    require("./assets/route_ferme.png"),
    require("./assets/encombrement.png")
]
  constructor(props) {
    super(props) 
    this.state = {
      markers : [{
        coordinate:
        {latitude: 36.7692359,
          longitude : 3.0593714},
          title:"Accident",
          description:"",
          imageNum: 0
      },
      {
        coordinate:
        {latitude: 36.7794,
          longitude : 3.058300000000031},
          title:"Travaux",
          description:"",
          imageNum: 1
      },
      {
        coordinate:
        {latitude: 36.7153785,
          longitude : 3.0510691},
          title:"ٌRoute Fermèe",
          description:"",
          imageNum: 2
      },
      {
        coordinate:
        {latitude: 36.7676939,
          longitude : 3.0529022},
          title:"Route encombrée",
          description:"",
          imageNum: 3
      },
      {
        coordinate:
        {latitude: 36.7601908,
          longitude : 3.0566104},
          title:"Accident",
          description:"",
          imageNum: 0
      },
      {
        coordinate:
        {latitude: 36.7094,
          longitude : 3.050300000000031},
          title:"Travaux",
          description:"",
          imageNum: 1
      },
      {
        coordinate:
        {latitude: 36.7146,
          longitude : 3.1146999999999707},
          title:"ٌRoute Fermèe",
          description:"",
          imageNum: 2
      },
      {
        coordinate:
        {latitude: 36.04763,
          longitude : 2.958400000000006},
          title:"Route encombrée",
          description:"",
          imageNum: 3
      },
      
     ],
      isVisible:true
    }
    this.ToggleModal = this.ToggleModal.bind(this)
  }
  
  ToggleModal(){
    this.setState(
      { isVisible: !this.state.isVisible })
      
  }
  render(){
    
    return (
      <View style={styles.container}>
   
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         initialRegion={{
           latitude: 36.775361,
           longitude: 3.060188,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
         {this.state.markers.map((marker,index) => {
           return (
           <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onClick={this.ToggleModal}
           >
             <Image
                source={this.images[marker.imageNum]}
                style={styles.imagemarker}
              />
          </MapView.Marker>
         )
        })}

        
       </MapView>
       
       
      
     </View> );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
  imagemarker:{
    width : 40,
    height : 40 
  }
  ,
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  }
 });
 