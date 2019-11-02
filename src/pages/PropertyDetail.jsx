import React, { Component } from 'react';
import Header from '../components/Header/Header';
import BackBanner from '../components/BackBanner';
import Gallery from '../components/Gallery/Gallery';
import Container from '../components/shared/Container';
import styled from 'styled-components';

import Box from '../components/shared/Box';
import PropertyPanel from '../components/PropertyPanel/PropertyPanel';
import PropertyCardLarge from '../components/PropertyCard/PropertyCardLarge';
import MortgageCalculator from '../components/MortgageCalculator';

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
              <Box mb="2xl">
                <Gallery imgUrl={img_url} />
              </Box>
              <PropertyCardLarge property={property} />
            </Box>
            <PropertyPanel property={property} />
          </Details>
          <Section>
            <Title>Mortgage Calculator</Title>
            <MortgageCalculator />
          </Section>
        </Container>
      </>
    );
  }
}

export default PropertyDetail;

const Details = styled(Box)`
  padding-top: ${(props) => props.theme.spacing['2xl']};
  margin-bottom: 10rem;
`;

const Section = styled.section`
  padding-bottom: 15rem;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.size['2xl']};
  color: ${(props) => props.theme.palette.neutral['600']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  margin-bottom: ${(props) => props.theme.spacing['2xl']};
`;
