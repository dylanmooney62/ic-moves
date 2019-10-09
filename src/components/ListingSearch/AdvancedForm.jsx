import React from 'react';
import styled from 'styled-components';

import CustomSelect from '../shared/CustomSelect';
import CustomInput from '../shared/CustomInput';

import { MAX_ROOM_OPTIONS, MIN_ROOM_OPTIONS } from './options';

const AdvancedForm = ({ formData, active, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <StyledAdvancedForm active={active}>
      <StyledCustomSelect
        label="Max Bedrooms"
        id="maxBedroom"
        name="maxBedroom"
        value={formData.maxBedroom}
        onChange={handleChange}
        options={MAX_ROOM_OPTIONS}
      />
      <StyledCustomSelect
        label="Min Bathrooms"
        id="minBathroom"
        name="minBathroom"
        value={formData.minBathroom}
        onChange={handleChange}
        options={MIN_ROOM_OPTIONS}
      />
      <StyledCustomSelect
        label="Max Bathrooms"
        id="maxBathroom"
        name="maxBathroom"
        value={formData.maxBathrrom}
        onChange={handleChange}
        options={MAX_ROOM_OPTIONS}
      />
      <StyledCustomInput
        label="Keywords"
        name="keywords"
        id="keywords"
        placeholder="'Garden' or 'Gym'"
        type="text"
        value={formData.keywords}
        onChange={handleChange}
      />
    </StyledAdvancedForm>
  );
};

export default AdvancedForm;

const StyledAdvancedForm = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.palette.neutral['100']};

  @media only screen and (max-width: 1240px) {
    flex-direction: column;
  }
`;

const StyledCustomSelect = styled(CustomSelect)`
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing.md};
    font-size: ${(props) => props.theme.typography.size.base};
  }
`;

const StyledCustomInput = styled(CustomInput)`
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing.md};
    font-size: ${(props) => props.theme.typography.size.base};
  }
`;
