import React from 'react';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import * as veloData from "./data/vlille-realtime (1).json"


export default function App() {
  const [veloStation, setVeloStation] = React.useState(null);

  return <Map center={[50.629250, 3.057256]} zoom={15} >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {veloData.records.map(velo => (
      <Marker
        key={velo.fields.libelle}
        position={[
          velo.geometry.coordinates[1],
          velo.geometry.coordinates[0]
        ]}
        onclick={() => {
          setVeloStation(velo);
        }}
      />
    ))}

    {veloStation && (<Popup
      position={[
        veloStation.geometry.coordinates[1],
        veloStation.geometry.coordinates[0]
      ]}
      onClose={() => {
        setVeloStation(null);
      }}
    >
      <div>
        <h2>{veloStation.fields.nom}</h2>
        <p>Adresse : {veloStation.fields.adresse} </p>
        <p>N° Vélo disponible : {veloStation.fields.nbvelosdispo}</p>
        <p>N° Places disponible : {veloStation.fields.nbplacesdispo}</p>

      </div>

    </Popup>
    )}

  </Map>
}


