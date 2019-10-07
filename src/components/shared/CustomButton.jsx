import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const CustomButton = styled.button`
  color: #ffffff;
  padding-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  padding-left: ${(props) => props.theme.spacing['2xl']};
  padding-right: ${(props) => props.theme.spacing['2xl']};
  transition: background-color 0.3s ease-in-out;
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  font-family: inherit;
  font-size: ${(props) => props.theme.typography.size.base};
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: ${(props) => props.theme.palette.primary['500']};

      &:hover {
        background-color: ${(props) => props.theme.palette.primary['600']};
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: ${(props) => props.theme.palette.secondary['200']};

      &:hover {
        background-color: ${(props) => props.theme.palette.secondary['300']};
      }
    `}
`;

CustomButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
};

CustomButton.defaultProps = {
  color: 'primary',
};

export default CustomButton;
