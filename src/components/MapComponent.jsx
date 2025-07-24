// MapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '200px',
  float:'right',
};

const center = {
  lat: 25.39333, // Latitudee
  lng: 68.36852, // Longitude
};

const MapComponent = () => {
  return (
    <div className='border border-0.5 border-gray-400'> 
    <LoadScript googleMapsApiKey="AIzaSyAXvnKBA-nYis4NRU5hn4JJEy6x_tZMaxw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default MapComponent;
