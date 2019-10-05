import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  width: ${(props) => props.width && props.width};

  /* parent */
  display: ${(props) => (props.display ? props.display : 'block')};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap && props.flexWrap};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
  align-content: ${(props) => props.alignContent && props.alignContent};

  /* children */
  order: ${(props) => props.order && props.order};
  flex-grow: ${(props) => props.flexGrow && props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink && props.flexShrink};
  align-self: ${(props) => props.alignSelf && props.alignSelf};

  /* shadows */
  box-shadow: ${(props) => props.shadow && props.theme.shadow[1]};
`;

Box.propTypes = {
  width: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  alignSelf: PropTypes.string,
  boxShadow: PropTypes.number,
};

export default Box;
