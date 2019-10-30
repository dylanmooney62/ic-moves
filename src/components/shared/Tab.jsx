import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TabButton = styled.button`
  font-family: inherit;
  color: ${(props) => props.theme.palette.neutral['600']};
  font-size: ${(props) => props.theme.typography.size.sm};
  padding-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  padding-left: ${(props) => props.theme.spacing['3xl']};
  padding-right: ${(props) => props.theme.spacing['3xl']};
  background-color: ${(props) => props.theme.palette.primary['100']};
  border: none;
  border-top: 0.3rem solid transparent;
  display: inline-block;
  cursor: pointer;
  position: relative;
  z-index: 100;

  :focus {
    outline: none;
  }

  ${(props) =>
    props.active
      ? css`
          background-color: #ffffff;
          border-top: 0.3rem solid
            ${(props) => props.theme.palette.primary['500']};
        `
      : css`
          :hover {
            filter: brightness(99%);
          }
        `}
`;

TabButton.propTypes = {
  active: PropTypes.PropTypes.bool,
};

export default TabButton;
