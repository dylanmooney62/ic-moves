import React from 'react';
import LinkList from './LinkList';

const FooterLinks = ({ links }) => (
  <>
    {links.map(({ id, title, links }) => (
      <LinkList key={id} title={title} links={links} />
    ))}
  </>
);

export default FooterLinks;
