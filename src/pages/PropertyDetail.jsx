import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export class PropertyDetail extends Component {
  render() {
    return (
      <>
        <Header title="Property Detail" height="sm" textAlign="center" />
        <Footer />
      </>
    );
  }
}

export default PropertyDetail;
