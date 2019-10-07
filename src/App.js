import React from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/GlobalStyle';
import ListingSearch from './components/ListingSearch/ListingSearch';
import Container from './components/shared/Container';
import PropertyCardList from './components/PropertyCardList';
import properties from './temp/listings.json';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <ListingSearch />
        <PropertyCardList properties={properties.listings} limit={3} />
      </Container>
    </>
  );
};

export default App;
