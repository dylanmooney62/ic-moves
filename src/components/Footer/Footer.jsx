import React from 'react';
import styled from 'styled-components';
import Container from '../shared/Container';

import Logo from '../shared/Logo';
import Box from '../shared/Box';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const LINKS = [
  {
    id: 0,
    title: 'Discover',
    links: [
      { text: 'Buy', href: '#' },
      { text: 'Rent', href: '#' },
      { text: 'Calculator', href: '#' },
    ],
  },
  {
    id: 1,
    title: 'About',
    links: [
      { text: 'Team', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Contact', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" mb="3xl">
          <Logo withText />
          <Box display="flex">
            <FooterLinks links={LINKS} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Copyright>
            <small>&copy; {new Date().getFullYear()} IC Moves</small>
          </Copyright>
          <SocialLinks />
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.palette.secondary['300']};
  padding: ${(props) => props.theme.spacing['2xl']};
`;

const Copyright = styled.p`
  font-size: ${(props) => props.theme.typography.size.base};
`;
