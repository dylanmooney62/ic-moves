import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Listings from './pages/Listings';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" component={Listings} />
      </Switch>
    </>
  );
};

export default App;
