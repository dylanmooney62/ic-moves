import React from 'react';
import styled from 'styled-components';

import CustomInput from '../shared/CustomInput';
import CustomSelect from '../shared/CustomSelect';

import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';

import {
  MIN_PRICE_OPTIONS,
  MAX_PRICE_OPTIONS,
  MIN_ROOM_OPTIONS,
} from './options';

const MainForm = ({ formData, errors, onChange, onToggle }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <StyledMainForm>
      <StyledCustomInput
        label="Location"
        name="placeName"
        id="placeName"
        value={formData.placeName}
        placeholder={errors.placeName || "e.g Glasgow, GLS or 'Bellgrove"}
        type="text"
        onChange={handleChange}
        error={errors.placeName}
      />
      <StyledCustomSelect
        label="Min Price"
        id="priceMin"
        name="priceMin"
        value={formData.priceMin}
        onChange={handleChange}
        options={MIN_PRICE_OPTIONS}
      />
      <StyledCustomSelect
        label="Max Price"
        id="priceMax"
        name="priceMax"
        value={formData.priceMax}
        onChange={handleChange}
        options={MAX_PRICE_OPTIONS}
      />
      <StyledCustomSelect
        label="Bedrooms"
        id="bedroomMin"
        name="bedroomMin"
        value={formData.bedroomMin}
        onChange={handleChange}
        options={MIN_ROOM_OPTIONS}
      />
      <ToggleButton onClick={handleToggle}>
        Advanced Options
        <StyledChevron />
      </ToggleButton>
    </StyledMainForm>
  );
};

export default MainForm;

const StyledMainForm = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.xl};
  position: relative;

  @media only screen and (max-width: 1240px) {
    width: 100%;
    flex-direction: column;
    align-items: unset;
  }
`;

const StyledCustomInput = styled(CustomInput)`
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing.md};
    font-size: ${(props) => props.theme.typography.size.base};
  }
`;

const StyledCustomSelect = styled(CustomSelect)`
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing.md};
    font-size: ${(props) => props.theme.typography.size.base};
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  bottom: ${(props) => props.theme.spacing.xs};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.size.xs};
  color: ${(props) => props.theme.palette.neutral['300']};

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 1240px) {
    position: relative;
    margin-top: ${(props) => props.theme.spacing.lg};
  }
`;

const StyledChevron = styled(Chevron)`
  fill: ${(props) => props.theme.palette.primary['500']};
  margin-left: ${(props) => props.theme.spacing['2xs']};
`;
