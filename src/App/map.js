import React, { useState, useEffect, setState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import {Sidebar} from "./Sidebar";

function Map() {
const [marker, setMarker] = React.useState([]);


  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 33.000000, lng: 130.504000 }} 
      resetBoundsOnResize={true}
      onClick= {(event) => { setMarker((current) =>[...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  } 
      }
    >
      {marker.map((mrker) => (
        <Marker
          key= {mrker.time.toISOString()}
          position = {{lat: mrker.lat, lng: mrker.lng}} draggable={true}  />
      ))}
      
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function exportMap() {
  return (
    <div>
     
     

     <Sidebar/>
        <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
        loadingElement={<div style={{ height: "100px" }} />}
        containerElement={<div style={{ height: "100px" }} />}
        mapElement={<div style={{ width:"73%",height: "500px",  position:"absolute", top:"200px", left:"20%"}} />}
      />
    
    
    
      
      
    </div>
  );
}