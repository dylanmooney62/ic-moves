import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header/Header';
import ListingSearch from '../components/ListingSearch/ListingSearch';

export class Listing extends Component {
  render() {
    return (
      <>
        <Header title="Listings" textAlign="center" height="md" />
        <ListingSearch />
      </>
    );
  }
}

export default withRouter(Listing);
