import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';

const SocialLinks = () => {
  return (
    <List>
      <ListItem>
        <Link href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </Link>
      </ListItem>
    </List>
  );
};

export default SocialLinks;

const List = styled.ul`
  list-style: none;
  display: flex;

  @media only screen and (max-width: 440px) {
    margin-bottom: ${(props) => props.theme.spacing.xl};
  }
`;

const ListItem = styled.li`
  :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing['2xl']};
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;

  svg path {
    transition: fill 0.3s ease-out;
  }

  :hover svg path {
    fill: ${(props) => props.theme.palette.primary['500']};
  }
`;
