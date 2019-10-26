import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ucFirstLetter } from '../utils/utils';
import { withRouter } from 'react-router';

import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as BedIcon } from '../assets/icons/bed.svg';
import { ReactComponent as BathIcon } from '../assets/icons/bath.svg';

import CustomButton from './shared/CustomButton';
import Box from './shared/Box';

const PropertyCard = ({
  imageUrl,
  type,
  price,
  Propertylocation,
  bedrooms,
  bathrooms,
  history,
}) => {
  const handleClick = () => {
    history.push({
      pathname: '/property-detail',
    });
  };

  return (
    <PropertyCardContainer>
      <ImgContainer>
        <PropertyImg src={imageUrl} alt={type} />
      </ImgContainer>
      <Divider>
        <Title>
          {type !== 'land' && <span>{bedrooms || 1} Bedroom </span>}
          {ucFirstLetter(type)}
        </Title>
        <Price>{price}</Price>
        <Box display="flex" alignItems="center">
          <LocationIcon />
          <LocationText>{Propertylocation}</LocationText>
        </Box>
      </Divider>
      <Divider alternate>
        <Box display="flex" alignItems="center">
          <StyledBedIcon />
          <DetailText>
            <Bold>{bedrooms || 1}</Bold> Bedroom
          </DetailText>
        </Box>
        <Box display="flex" alignItems="center">
          <StyledBathIcon />
          <DetailText>
            <Bold>{bathrooms || 1}</Bold> Bathroom
          </DetailText>
        </Box>
      </Divider>
      <PropertyButton onClick={handleClick}>View Property</PropertyButton>
    </PropertyCardContainer>
  );
};

PropertyCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  Propertylocation: PropTypes.string.isRequired,
  bedrooms: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  bathrooms: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
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
