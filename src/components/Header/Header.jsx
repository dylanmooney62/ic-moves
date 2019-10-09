import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import heroImage from '../../assets/images/hero-image.jpeg';
import Container from '../shared/Container';
import Navigation from './Navigation';

const Header = ({ title, subtitle, textAlign, height }) => (
  <StyledHeader>
    <Navigation />
    <Container>
      <TextBox textAlign={textAlign} height={height}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TextBox>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  height: PropTypes.oneOf(['sm', 'md', 'lg']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

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

const TextBox = styled.div.attrs((props) => ({
  height: props.height || 'md',
}))`
  text-align: ${(props) => props.textAlign && props.textAlign};

  ${(props) =>
    props.height === 'sm' &&
    css`
      padding-top: 6rem;
      padding-bottom: 18rem;
    `}

  ${(props) =>
    props.height === 'md' &&
    css`
      padding-top: 10rem;
      padding-bottom: 22rem;
    `}

  ${(props) =>
    props.height === 'lg' &&
    css`
      padding-top: 18rem;
      padding-bottom: 30rem;
    `}
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
