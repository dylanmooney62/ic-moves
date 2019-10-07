import React from 'react';
import PropertyCard from './PropertyCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PropertyCardList = ({ properties, limit }) => (
  <StyledPropertyCardList>
    <ListItem>
      <PropertyCard />
    </ListItem>
  </StyledPropertyCardList>
);

PropertyCardList.propsTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number,
};

export default PropertyCardList;

const StyledPropertyCardList = styled.ul`
  list-style: none;
`;

const ListItem = styled.li``;
