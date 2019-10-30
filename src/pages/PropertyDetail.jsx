import React, { Component } from 'react';
import Header from '../components/Header/Header';
import BackBanner from '../components/BackBanner';
import Gallery from '../components/Gallery/Gallery';
import Container from '../components/shared/Container';
import styled from 'styled-components';

import Box from '../components/shared/Box';
import PropertyPanel from '../components/PropertyPanel';
import PropertyCardLarge from '../components/PropertyCard/PropertyCardLarge';

export class PropertyDetail extends Component {
  render() {
    const property = this.props.history.location.state;
    const { img_url } = property;

    return (
      <>
        <Header title="Property Detail" height="sm" textAlign="center" />
        <BackBanner />
        <Container maxWidth="sm">
          <Details as="article">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box mb="3xl">
                <Gallery imgUrl={img_url} />
              </Box>
              <PropertyCardLarge property={property} />
            </Box>
            <PropertyPanel />
          </Details>
        </Container>
      </>
    );
  }
}

export default PropertyDetail;

const Details = styled(Box)`
  padding-top: ${(props) => props.theme.spacing['2xl']};
  padding-bottom: 15rem;
`;
