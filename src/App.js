import React from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/GlobalStyle';
import ListingSearch from './components/ListingSearch/ListingSearch';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ListingSearch />
    </>
  );
};

export default App;
