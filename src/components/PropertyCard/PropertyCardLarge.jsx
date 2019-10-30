import React from 'react';
import styled from 'styled-components';

import Details from './Details';
import Rooms from './Rooms';
import CustomButton from '../shared/CustomButton';

const PropertyCardLarge = ({
  property,
  property: {
    property_type,
    price_formatted,
    title,
    bedroom_number,
    bathroom_number,
    car_spaces,
  },
}) => {
  const handleClick = () => {
    console.log(property);
  };

  return (
    <PropertyCardContainer>
      <Details
        title={property_type}
        bedrooms={bedroom_number}
        price={price_formatted}
        location={title}
      />
      <Rooms
        bedrooms={bedroom_number}
        bathrooms={bathroom_number}
        garages={car_spaces || '0'}
      />
      <PropertyButton onClick={handleClick}>Contact Realtor</PropertyButton>
    </PropertyCardContainer>
  );
};

export default PropertyCardLarge;

const PropertyCardContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: ${(props) => props.theme.shadow['1']};
  overflow: hidden;
`;

const PropertyButton = styled(CustomButton)`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
