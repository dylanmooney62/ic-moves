import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
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
    const { img_url, listing_type, price_high } = property;

    return (
      <>
        <Header title="Property Detail" height="sm" textAlign="center" />
        <BackBanner />
        <Container maxWidth="sm">
          <Details as="article">
            <ResponsiveBox
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box mb="2xl" style={{ width: '100%' }}>
                <Gallery imgUrl={img_url} />
              </Box>
              <PropertyCardLarge property={property} />
            </ResponsiveBox>
            <PropertyPanel property={property} />
          </Details>
          {listing_type === 'buy' && (
            <Section>
              <Title>Mortgage Calculator</Title>
              <MortgageCalculator defaultAmount={price_high} />
            </Section>
          )}
        </Container>
        <Footer />
      </>
    );
  }
}

export default PropertyDetail;

const ResponsiveBox = styled(Box)`
  @media only screen and (max-width: 1240px) {
    flex-direction: column;
    max-width: 60rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.spacing['3xl']};
  }
`;

const Details = styled(Box)`
  padding-top: ${(props) => props.theme.spacing['2xl']};
  margin-bottom: 10rem;

  @media only screen and (max-width: 1240px) {
    margin-bottom: ${(props) => props.theme.spacing['3xl']};
  }
`;

const Section = styled.section`
  padding-bottom: 15rem;

  @media only screen and (max-width: 1240px) {
    max-width: 60rem;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.size['2xl']};
  color: ${(props) => props.theme.palette.neutral['600']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  margin-bottom: ${(props) => props.theme.spacing['2xl']};
`;
