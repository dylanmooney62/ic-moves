import React from 'react';
import styled, { css } from 'styled-components';
import { ucFirstLetter } from '../utils/utils';
import { withRouter } from 'react-router';

import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as BedIcon } from '../assets/icons/bed.svg';
import { ReactComponent as BathIcon } from '../assets/icons/bath.svg';

import CustomButton from './shared/CustomButton';
import Box from './shared/Box';

const PropertyCard = ({
  property,
  property: {
    img_url,
    property_type,
    price_formatted,
    title,
    bedroom_number,
    bathroom_number,
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
      <Divider>
        <Title>
          {property_type !== 'land' && (
            <span>{bedroom_number || 1} Bedroom </span>
          )}
          {ucFirstLetter(property_type)}
        </Title>
        <Price>{price_formatted}</Price>
        <Box display="flex" alignItems="center">
          <LocationIcon />
          <LocationText>{title}</LocationText>
        </Box>
      </Divider>
      <Divider alternate>
        <Box display="flex" alignItems="center">
          <StyledBedIcon />
          <DetailText>
            <Bold>{bedroom_number || 1}</Bold> Bedroom
          </DetailText>
        </Box>
        <Box display="flex" alignItems="center">
          <StyledBathIcon />
          <DetailText>
            <Bold>{bathroom_number || 1}</Bold> Bathroom
          </DetailText>
        </Box>
      </Divider>
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

const Divider = styled.div`
  padding: ${(props) => props.theme.spacing.sm};

  ${(props) =>
    props.alternate &&
    css`
      background-color: ${props.theme.palette.primary['100']};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `};
`;

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
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DetailText = styled.span`
  font-size: ${(props) => props.theme.typography.size.sm};
  font-weight: ${(props) => props.theme.typography.weight.base};
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-left: ${(props) => props.theme.spacing.md};
`;

const Bold = styled.span`
  font-weight: ${(props) => props.theme.typography.weight.bold};
`;

const StyledBedIcon = styled(BedIcon)`
  width: 35px;
  fill: ${(props) => props.theme.palette.primary['600']};
  display: flex;
  align-items: center;
  transform: translateY(0.5rem);
`;
const StyledBathIcon = styled(BathIcon)`
  display: flex;
  width: 30px;
  flex: 1 0 auto;
  fill: ${(props) => props.theme.palette.primary['600']};
  align-items: center;
  transform: translateY(0.2rem);
`;

const PropertyButton = styled(CustomButton)`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
