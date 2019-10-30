import React from 'react';
import styled from 'styled-components';

import Box from '../shared/Box';

import { ReactComponent as BedIcon } from '../../assets/icons/bed.svg';
import { ReactComponent as BathIcon } from '../../assets/icons/bath.svg';
import { ReactComponent as GarageIcon } from '../../assets/icons/garage.svg';

const Rooms = ({ bedrooms, bathrooms, garages }) => {
  return (
    <RoomsContainer
      p="sm"
      display="flex"
      justifyContent={'space-between'}
      alignItems="center"
    >
      <Box display="flex" alignItems="center">
        <StyledBedIcon />
        <RoomText>
          <span>{bedrooms || 1}</span> Bedroom
        </RoomText>
      </Box>
      <Box display="flex" alignItems="center">
        <StyledBathIcon />
        <RoomText>
          <span>{bathrooms || 1}</span> Bathroom
        </RoomText>
      </Box>
      {garages && (
        <Box display="flex" alignItems="center">
          <StyledGarageIcon />
          <RoomText>
            <span>{garages}</span> Garage
          </RoomText>
        </Box>
      )}
    </RoomsContainer>
  );
};

export default Rooms;

const RoomsContainer = styled(Box)`
  background-color: ${(props) => props.theme.palette.primary['100']};
`;

const RoomText = styled.span`
  font-size: ${(props) => props.theme.typography.size.sm};
  font-weight: ${(props) => props.theme.typography.weight.base};
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-left: ${(props) => props.theme.spacing.md};

  margin-left: ${(props) => props.garages && props.theme.spacing.sm};

  span {
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
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

const StyledGarageIcon = styled(GarageIcon)`
  display: flex;
  width: 45px;
  flex: 1 0 auto;
  fill: ${(props) => props.theme.palette.primary['600']};
  align-items: center;
  transform: translateY(0.5rem);
`;
