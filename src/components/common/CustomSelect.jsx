import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';

const CustomSelect = ({ label, id, options, ...otherProps }) => (
  <SelectContainer>
    {label && <StyledLabel htmlFor={id}>Min Price</StyledLabel>}
    <StyledChevron />
    <StyledSelect id={id} {...otherProps}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </StyledSelect>
  </SelectContainer>
);

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomSelect;

const SelectContainer = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;

  ::after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.palette.secondary['100']};
    height: 3.6rem;
    width: 3.6rem;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }
`;

const StyledChevron = styled(Chevron)`
  position: absolute;
  bottom: 1.4rem;
  right: ${(props) => props.theme.spacing.sm};
  fill: #ffffff;
  font-size: ${(props) => props.theme.typography.size.base};
  z-index: 10;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.neutral['500']};
  font-size: ${(props) => props.theme.typography.size.sm};
  margin-bottom: ${(props) => props.theme.spacing['2xs']};
`;

const StyledSelect = styled.select`
  padding-left: ${(props) => props.theme.spacing.xs};
  padding-right: 4.4rem;
  font-size: ${(props) => props.theme.typography.size.sm};
  font-family: ${(props) => props.theme.typography.family};
  border: 0.1rem solid ${(props) => props.theme.palette.primary['300']};
  border-radius: 0;
  height: 3.6rem;
  width: 20rem;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  background-color: #ffffff;
  cursor: pointer;

  :focus {
    outline: 0.1rem solid ${(props) => props.theme.palette.primary['400']};
  }
`;
