import React from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/GlobalStyle';
import ListingSearch from './components/ListingSearch/ListingSearch';
import Container from './components/shared/Container';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <ListingSearch />
      </Container>
    </>
  );
};

export default App;
