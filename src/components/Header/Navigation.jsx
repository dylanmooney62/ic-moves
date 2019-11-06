import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../shared/Logo';

const Navigation = () => (
  <StyledNavigation>
    <Link to="/">
      <Logo />
    </Link>
    <NavigationList>
      <NavigationItem>
        <NavigationLink href="#">Buy</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink href="#">Rent</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink href="#">Sign up</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink href="#">Log in</NavigationLink>
      </NavigationItem>
    </NavigationList>
  </StyledNavigation>
);

export default Navigation;

const StyledNavigation = styled.nav`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1240px) {
    width: 95%;
  }

  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 740px) {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing['3xl']};
  }
`;

const NavigationLink = styled.a`
  display: block;
  color: ${(props) => props.theme.palette.neutral['100']};
  font-size: ${(props) => props.theme.typography.size.base};
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  padding: 0.1rem;

  &:hover {
    color: ${(props) => props.theme.palette.neutral['200']};
  }
`;
