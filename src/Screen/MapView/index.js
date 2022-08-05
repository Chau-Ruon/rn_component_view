import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Map = () => {
  let mapRef = useRef();
  const [center, setCenter] = useState({
    latitude: 14.0583241111111111,
    longitude: 108.277199111111111
  })
  const [zoom, setZoom] = useState(16)
  const [altitude, setAltitude] = useState(0)
  const [heading, setHeading] = useState(0)
  const [stateMap, setStateMap] = useState(null);
  const [markerIn, setMarkerIn] = useState(false);

  const getNearby = async () => {
    await Geolocation.getCurrentPosition((position => {
      const { latitude, longitude,altitude,heading,speed,altitudeAccuracy } = position.coords;
      console.log(`getNearby`,position);
      !markerIn ? setMarkerIn(true) : null;
      setHeading(heading);
      setAltitude(altitude);
      setStateMap({
        latitude:latitude,
        longitude:longitude,
        latitudeDelta: 0.007353455420179955,
        longitudeDelta:0.0037011131644248962
      })
    }))
  }
  useEffect(()=>{
    getNearby()
  },[]);

  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        onMapReady={async () => {setCenter(stateMap);}}
        // initialRegion={stateMap}
        minZoomLevel={7}
        maxZoomLevel={19}
        showsMyLocationButton={false}
        style={styles.map}
        moveOnMarkerPress={false}
        camera={{
            zoom: zoom,
            center,
            pitch: 0,
            heading:heading,
            altitude:altitude
        }}
        rotateEnabled={false}
        mapType="standard"
        zoomTapEnabled={false}
        onLongPress={async (loglat)=>{
          console.log(`loglat ${loglat.coordinate}`);
          // setStateMap({
          //   latitude:loglat.coordinate.latitude,
          //   longitude:loglat.coordinate.longitude,
          // })
        }}
        onRegionChangeComplete={async regioncomplete => {
            if(!mapRef || !mapRef.current){
                console.log('NO MAP')
            }
            const camera = await mapRef.current.getCamera();
            console.log(`camera`, camera);
            const addressFor = await mapRef.current.addressForCoordinate();
            console.log(`addressForCoordinate`,mapRef.current.addressForCoordinate);
            console.log(`camera`, camera);
            setZoom(camera.zoom)
            // setStateMap(camera.center)
            setCenter(camera.center);
        }}
      >
        <Marker
            coordinate={stateMap}
            anchor={{x:0.5,y:0.5}}
            icon={require('../../assets/icon/location.png')}
            style={{height:12, width:1}}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
