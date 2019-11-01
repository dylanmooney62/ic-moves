import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const PropertyMap = ({ lat, lng }) => {
  const position = [lat, lng];

  return (
    <StyledPropertyMap>
      <Map center={position} zoom={14} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </Map>
    </StyledPropertyMap>
  );
};

export default PropertyMap;

const StyledPropertyMap = styled.div`
  height: 40rem;
  width: 100%;
`;
