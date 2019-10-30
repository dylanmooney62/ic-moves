import React from 'react';
import PropertyCard from './PropertyCard/PropertyCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './shared/Container';

const PropertyCardList = ({ properties, limit }) => {
  return (
    <Container maxWidth="sm">
      <StyledPropertyCardList>
        {properties
          .filter((i, idx) => idx < limit)
          .map((property, idx) => (
            <ListItem key={idx}>
              <PropertyCard property={property} />
            </ListItem>
          ))}
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
