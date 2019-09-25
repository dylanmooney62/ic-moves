import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/hero-image.jpeg';
import Container from '../shared/Container';
import Navigation from './Navigation';

const Header = () => (
  <StyledHeader>
    <Navigation />
    <Container>
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
      rgba(23, 41, 62, 0.4),
      rgba(23, 41, 52, 0.4)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;
`;

const TextBox = styled.div`
  padding-top: 18rem;
  padding-bottom: 30rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.palette.neutral['100']};
  font-size: ${(props) => props.theme.typography.size['5xl']};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  font-weight: ${(props) => props.theme.typography.weight.bold};
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.palette.neutral['100']};
  font-size: ${(props) => props.theme.typography.size.base};
  max-width: 60rem;
`;
