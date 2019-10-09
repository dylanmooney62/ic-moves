import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const CustomInput = ({ label, id, className, error, ...otherProps }) => (
  <InputContainer className={className}>
    {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    <StyledInput id={id} {...otherProps} error={error} />
  </InputContainer>
);

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomInput;

const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 24rem;
`;

const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.neutral['500']};
  font-size: ${(props) => props.theme.typography.size.sm};
  margin-bottom: ${(props) => props.theme.spacing['2xs']};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.typography.size.sm};
  font-family: ${(props) => props.theme.typography.family};
  color: ${(props) => props.theme.palette.neutral['500']};
  border: 0.1rem solid ${(props) => props.theme.palette.primary['200']};

  ${(props) =>
    props.error &&
    css`
      border: 0.1rem solid #f43b47;

      &&::placeholder {
        color: #f43b47;
      }
    `}

  ::placeholder {
    color: ${(props) => props.theme.palette.neutral['300']};
  }

  :focus {
    outline: 0.1rem solid ${(props) => props.theme.palette.primary['400']};
  }
`;
