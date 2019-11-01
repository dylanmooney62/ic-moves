import styled from 'styled-components';

const StyledPanel = styled.div`
  background-color: #ffffff;
  flex: 1;
  box-shadow: ${(props) => props.theme.shadow['1']};
  border-radius: ${(props) => props.theme.radius.md};
`;

export default StyledPanel;
