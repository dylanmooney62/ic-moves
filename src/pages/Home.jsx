import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import ListingSearch from '../components/ListingSearch/ListingSearch';
import PropertyCardList from '../components/PropertyCardList';
import properties from '../temp/listings.json';

const Home = () => {
  return (
    <>
      <Header />
      <ListingSearch />
      <FeaturedSection>
        <Title>Featured Properties</Title>
        <PropertyCardList properties={properties.listings} limit={3} />
      </FeaturedSection>
    </>
  );
};

export default withRouter(Home);

const Title = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.typography.size['3xl']};
  color: ${(props) => props.theme.palette.neutral['600']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  margin-bottom: ${(props) => props.theme.spacing['3xl']};
`;

const FeaturedSection = styled.section`
  margin-top: -15rem;
  padding: 15rem 0;
`;
