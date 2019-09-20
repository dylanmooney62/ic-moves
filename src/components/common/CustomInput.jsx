import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomInput = ({ label, id, ...otherProps }) => (
  <FormGroup>
    {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    <StyledInput id={id} {...otherProps} />
  </FormGroup>
);

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomInput;

const FormGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.neutral['500']};
  font-size: ${(props) => props.theme.typography.size.sm};
  margin-bottom: ${(props) => props.theme.spacing['2xs']};
`;

const StyledInput = styled.input`
  width: 24rem;
  padding: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.typography.size.sm};
  font-family: ${(props) => props.theme.typography.family};
  color: ${(props) => props.theme.palette.neutral['500']};
  border: 0.1rem solid ${(props) => props.theme.palette.primary['300']};

  ::placeholder {
    color: ${(props) => props.theme.palette.neutral['200']};
  }

  :focus {
    outline: 0.1rem solid ${(props) => props.theme.palette.primary['400']};
  }
`;
