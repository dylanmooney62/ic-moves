import React, { Component } from 'react';
import Header from '../components/Header/Header';
import BackBanner from '../components/BackBanner';
import Gallery from '../components/Gallery/Gallery';
import Container from '../components/shared/Container';
import styled from 'styled-components';

import Box from '../components/shared/Box';

export class PropertyDetail extends Component {
  render() {
    const property = this.props.history.location.state;
    const { img_url } = property;

    return (
      <>
        <Header title="Property Detail" height="sm" textAlign="center" />
        <BackBanner />
        <Container maxWidth="lg">
          <Details as="article">
            <Box>
              <Box mb="xl">
                <Gallery imgUrl={img_url} />
              </Box>
            </Box>
            <Box></Box>
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
