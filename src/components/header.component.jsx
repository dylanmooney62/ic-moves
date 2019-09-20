import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/images/hero-image.jpeg';
import Container from './container.component';

const Header = () => (
  <StyledHeader>
    <Container maxWidth="sm">
      <TextBox>
        <Title>Find your dream home</Title>
        <Subtitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          molestias debitis consectetur.
        </Subtitle>
      </TextBox>
    </Container>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  background-image: linear-gradient(
      rgba(23, 41, 62, 0.55),
      rgba(23, 41, 52, 0.55)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;
`;

const TextBox = styled.div`
  padding: 25rem 0;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${(props) => props.theme.typography.size['5xl']};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${(props) => props.theme.typography.size.base};
  max-width: 60rem;
`;
