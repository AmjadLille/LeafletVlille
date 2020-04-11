import React from 'react';
import './App.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon} from "leaflet";
import * as veloData from "./data/vlille-stations.json"


export default function App() {
  return <Map center={[50.629250,3.057256]} zoom={15} >
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
{veloData.records.map(velo => (
  <Marker
  key={velo.fields.libelle}
  position= {[
    velo.geometry.coordinates[1],
    velo.geometry.coordinates[0]
  ]}
  />
))}

  </Map>
}

 
