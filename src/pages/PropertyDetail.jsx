import React, { Component } from 'react';
import Header from '../components/Header/Header';
import BackBanner from '../components/BackBanner';

export class PropertyDetail extends Component {
  render() {
    return (
      <>
        <Header title="Property Detail" height="sm" textAlign="center" />
        <BackBanner />
      </>
    );
  }
}

export default PropertyDetail;
