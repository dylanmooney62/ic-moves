import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';

const GalleryButton = ({ direction, onClick }) => {
  return (
    <StyledButton direction={direction} onClick={onClick}>
      <StyledChevron />
    </StyledButton>
  );
};

GalleryButton.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']),
};

export default GalleryButton;

const StyledChevron = styled(Chevron)`
  fill: #ffffff;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  border: none;

  :focus {
    outline: none;
  }

  ${(props) =>
    props.direction === 'next'
      ? css`
          right: 0;
          ${StyledChevron} {
            transform: rotate(-90deg);
          }
        `
      : css`
          left: 0;
          ${StyledChevron} {
            transform: rotate(90deg);
          }
        `}
`;
