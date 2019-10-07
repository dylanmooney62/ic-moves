import React from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/GlobalStyle';
import ListingSearch from './components/ListingSearch/ListingSearch';
import Container from './components/shared/Container';
import PropertyCard from './components/PropertyCard';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <ListingSearch />
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1553524790-5872ab69e309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          title="Modern Family Mansion"
          price="1,000,000"
          location="12 Cherry Lane"
          bedrooms={5}
          bathrooms={3}
        />
      </Container>
    </>
  );
};

export default App;
