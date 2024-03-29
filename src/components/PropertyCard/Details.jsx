import React from 'react';
import styled, { css } from 'styled-components';
import { ucFirstLetter } from '../../utils/utils';

import Box from '../shared/Box';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';

const Details = ({ title, bedrooms, price, location, priceType, lg }) => {
  const getSchedule = () => {
    switch (priceType) {
      case 'weekly':
        return 'per week';
      case 'monthly':
        return 'per month';
      default:
        break;
    }
  };

  const pricing = getSchedule();

  return (
    <Box p={lg ? 'md' : 'sm'}>
      <Title lg={lg}>
        {title !== 'land' && <span>{bedrooms || 1} Bedroom </span>}
        {ucFirstLetter(title)}
      </Title>
      <Price lg={lg}>
        {price} {pricing && <span>{pricing}</span>}
      </Price>
      <Box display="flex" alignItems="center">
        <LocationIcon />
        <LocationText lg={lg}>
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

  ${(props) =>
    props.lg &&
    css`
      font-size: ${(props) => props.theme.typography.size['2xl']};
    `}
`;

const Price = styled.div`
  font-size: ${(props) => props.theme.typography.size['3xl']};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  color: ${(props) => props.theme.palette.neutral['600']};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  letter-spacing: 0.1rem;

  span {
    font-size: ${(props) => props.theme.typography.size['sm']};
    font-weight: ${(props) => props.theme.typography.weight.base};
    color: ${(props) => props.theme.palette.neutral['500']};
    letter-spacing: 0rem;
  }

  ${(props) =>
    props.lg &&
    css`
      font-size: ${(props) => props.theme.typography.size['4xl']};
    `}
`;

const LocationText = styled.span`
  font-size: ${(props) => props.theme.typography.size.sm};
  font-weight: ${(props) => props.theme.typography.weight.base};
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-left: ${(props) => props.theme.spacing.sm};

  ${(props) =>
    props.lg &&
    css`
      font-size: ${(props) => props.theme.typography.size.base};
    `}
`;
