import styled from 'styled-components';

const Section = styled.section`
  padding: 15rem 0;
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
`;

export default Section;
