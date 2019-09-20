import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  max-width: ${(props) => (props.maxWidth === 'sm' ? '100rem' : undefined)};
  max-width: ${(props) => (props.maxWidth === 'lg' ? '120rem' : undefined)};
`;

Container.propTypes = {
  maxWidth: PropTypes.oneOf(['sm', 'lg']),
};

export default Container;
