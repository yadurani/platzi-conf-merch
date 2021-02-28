import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
  const mapStyles = {
    height: '58vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDgCiQTHpcFglsJTKfJKHZ-SbeTy0DQTBs">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
