import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as BedIcon } from '../assets/icons/bed.svg';
import { ReactComponent as BathIcon } from '../assets/icons/bath.svg';
import CustomButton from './shared/CustomButton';

const PropertyCard = ({
  imageUrl,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
}) => {
  return (
    <PropertyCardContainer>
      <ImgContainer>
        <PropertyImg src={imageUrl} alt={title} />
      </ImgContainer>
      <Divider>
        <Title>{title}</Title>
        <Price>£{price}</Price>
        <FlexContainer>
          <LocationIcon />
          <LocationText>{location}</LocationText>
        </FlexContainer>
      </Divider>
      <Divider alternate>
        <FlexContainer>
          <StyledBedIcon />
          <DetailText>
            <Bold>{bedrooms}</Bold> Bedrooms
          </DetailText>
        </FlexContainer>
        <FlexContainer>
          <StyledBathIcon />
          <DetailText>
            <Bold>{bathrooms}</Bold> Bathrooms
          </DetailText>
        </FlexContainer>
      </Divider>
      <PropertyButton>View Property</PropertyButton>
    </PropertyCardContainer>
  );
};

PropertyCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
};

export default PropertyCard;

const PropertyCardContainer = styled.div`
  width: 100%;
  max-width: 30rem;
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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LocationText = styled.span`
  font-size: ${(props) => props.theme.typography.size.sm};
  font-weight: ${(props) => props.theme.typography.weight.base};
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-left: ${(props) => props.theme.spacing.sm};
  font-style: normal;
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
