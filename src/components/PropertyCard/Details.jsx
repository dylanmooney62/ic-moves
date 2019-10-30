import React from 'react';
import styled from 'styled-components';
import { ucFirstLetter } from '../../utils/utils';

import Box from '../shared/Box';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';

const Details = ({ title, bedrooms, price, location }) => {
  return (
    <Box p="sm">
      <Title>
        {title !== 'land' && <span>{bedrooms || 1} Bedroom </span>}
        {ucFirstLetter(title)}
      </Title>
      <Price>{price}</Price>
      <Box display="flex" alignItems="center">
        <StyledLocationIcon />
        <LocationText>
          {location
            .split(',')
            .slice(0, 1)
            .join('')}
        </LocationText>
      </Box>
    </Box>
  );
};

export default Details;

const Title = styled.h2`
  color: ${(props) => props.theme.palette.neutral['500']};
  font-size: ${(props) => props.theme.typography.size.xl};
  font-weight: ${(props) => props.theme.typography.weight.base};
  margin-bottom: ${(props) => props.theme.spacing['2xs']};
`;

const Price = styled.div`
  font-size: ${(props) => props.theme.typography.size['3xl']};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  color: ${(props) => props.theme.palette.neutral['600']};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  letter-spacing: 0.1rem;
`;

const LocationText = styled.span`
  font-size: ${(props) => props.theme.typography.size.sm};
  font-weight: ${(props) => props.theme.typography.weight.base};
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-left: ${(props) => props.theme.spacing.sm};
`;

const StyledLocationIcon = styled(LocationIcon)``;
