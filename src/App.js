import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
