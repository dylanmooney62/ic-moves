import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Details from './Details';
import Rooms from './Rooms';
import CustomButton from '../shared/CustomButton';

const PropertyCard = ({
  property,
  property: {
    img_url,
    property_type,
    price_formatted,
    title: location,
    bedroom_number,
    bathroom_number,
    price_type,
  },
  history,
}) => {
  const handleClick = () => {
    history.push({
      pathname: '/property-detail',
      state: property,
    });
  };

  return (
    <PropertyCardContainer>
      <ImgContainer>
        <PropertyImg src={img_url} alt={property_type} />
      </ImgContainer>
      <Details
        title={property_type}
        bedrooms={bedroom_number}
        price={price_formatted}
        location={location}
        priceType={price_type}
      />
      <Rooms bedrooms={bedroom_number} bathrooms={bathroom_number} />
      <PropertyButton onClick={handleClick}>View Property</PropertyButton>
    </PropertyCardContainer>
  );
};

export default withRouter(PropertyCard);

const PropertyCardContainer = styled.div`
  width: 100%;
  max-width: 31rem;
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: ${(props) => props.theme.shadow['1']};
  overflow: hidden;
`;

const ImgContainer = styled.figure`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const PropertyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const PropertyButton = styled(CustomButton)`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
