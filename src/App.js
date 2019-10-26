import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import PropertyDetail from './pages/PropertyDetail';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/property-detail" component={PropertyDetail} />
      </Switch>
    </>
  );
};

export default App;
