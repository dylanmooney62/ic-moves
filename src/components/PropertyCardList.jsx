import React from 'react';
import PropertyCard from './PropertyCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './shared/Container';

const PropertyCardList = ({ properties, limit }) => {
  return (
    <Container maxWidth="sm">
      <StyledPropertyCardList>
        {properties
          .filter((i, idx) => idx < limit)
          .map(
            (
              {
                img_url,
                property_type,
                price_formatted,
                title,
                bedroom_number,
                bathroom_number,
              },
              idx,
            ) => (
              <ListItem key={idx}>
                <PropertyCard
                  imageUrl={img_url}
                  type={property_type}
                  price={price_formatted}
                  location={title}
                  bedrooms={bedroom_number}
                  bathrooms={bathroom_number}
                />
              </ListItem>
            ),
          )}
      </StyledPropertyCardList>
    </Container>
  );
};

PropertyCardList.propsTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number,
};

export default PropertyCardList;

const StyledPropertyCardList = styled.ul`
  list-style: none;
  width: 100%;
  display: grid;
  grid-gap: ${(props) => props.theme.spacing['2xl']};
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;

  @media only screen and (max-width: 1240px) {
    grid-template-columns: 1fr 1fr;
    max-width: 70rem;

    li:nth-child(3) {
      grid-column: 1/3;
    }
  }

  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr;

    li:nth-child(3) {
      display: flex;
      grid-column: 1/2;
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
`;
