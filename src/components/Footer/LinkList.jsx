import React from 'react';
import styled from 'styled-components';

const LinkList = ({ title, links }) => {
  return (
    <StyledLinkList>
      <Title>{title}</Title>
      <List>
        {links.map(({ text, href }) => (
          <ListItem key={text}>
            <Link href={href}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </StyledLinkList>
  );
};

export default LinkList;

const StyledLinkList = styled.div`
  :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing['4xl']};
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.size.lg};
  color: ${(props) => props.theme.palette.neutral['100']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  font-size: ${(props) => props.theme.typography.size.base};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const Link = styled.a`
  color: ${(props) => props.theme.palette.neutral['300']};
  text-decoration: none;
  transition: color 0.3s ease-out;

  :hover {
    color: ${(props) => props.theme.palette.neutral['200']};
  }
`;
