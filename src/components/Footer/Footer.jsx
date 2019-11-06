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
      { text: 'Buy', href: '/' },
      { text: 'Rent', href: '/' },
      { text: 'Calculator', href: '/' },
    ],
  },
  {
    id: 1,
    title: 'About',
    links: [
      { text: 'Team', href: '/' },
      { text: 'Careers', href: '/' },
      { text: 'Contact', href: '/' },
    ],
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <FooterTop display="flex" justifyContent="space-between" mb="3xl">
          <StyledLogo withText />
          <Box display="flex">
            <FooterLinks links={LINKS} />
          </Box>
        </FooterTop>
        <FooterBottom
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright>
            <small>&copy; {new Date().getFullYear()} IC Moves</small>
          </Copyright>
          <SocialLinks />
        </FooterBottom>
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

const FooterTop = styled(Box)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spacing['2xl']};
  }
`;

const FooterBottom = styled(Box)`
  @media only screen and (max-width: 440px) {
    flex-direction: column-reverse;
  }
`;

const StyledLogo = styled(Logo)`
  @media only screen and (max-width: 768px) {
    margin-bottom: ${(props) => props.theme.spacing['2xl']};
  }
`;
