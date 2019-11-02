import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import propertySearch from '../api/propertySearch';

import qs from 'query-string';
import camelcaseKeys from 'camelcase-keys';

import ClipLoader from 'react-spinners/ClipLoader';

import Box from '../components/shared/Box';
import Header from '../components/Header/Header';
import ListingSearch from '../components/ListingSearch/ListingSearch';
import Container from '../components/shared/Container';
import PropertyCardList from '../components/PropertyCardList';
import Footer from '../components/Footer/Footer';

export class Listings extends Component {
  state = {
    placeName: '',
    properties: [],
    loading: true,
    message: '',
  };

  async componentDidMount() {
    this._search();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this._search();
    }
  }

  async _search() {
    this.setState({
      loading: true,
      message: '',
      properties: [],
    });

    const { location } = this.props;

    // returns query string as object, removes prepended q
    const queryObject = qs.parse(location.search);

    // converts place_name to placeName
    const { placeName } = camelcaseKeys(queryObject);

    // converts query object to string
    const queryString = qs.stringify(queryObject);

    const results = await propertySearch.get(
      `api?encoding=json&pretty=1&action=search_listings&country=uk&${queryString}`,
    );

    if (results.status === 200) {
      const statusCode = parseInt(
        results.data.response.application_response_code,
        10,
      );

      // codes 100-199 indicate request was valid
      if (statusCode < 200) {
        const properties = results.data.response.listings;

        // if code is valid but there's no results setMessage
        if (properties.length === 0) {
          this.setState({ message: 'No results found.' });
        }

        this.setState({
          properties,
          location: results.data.response.locations[0].title,
        });
      }

      // codes 200-299 indicate a bad location
      if (statusCode >= 200 && statusCode < 299) {
        this.setState({
          properties: [],
          message: 'Unknown location. Please try again.',
          location: placeName,
        });
      }

      // codes 900+ indicate an internal error
      if (statusCode >= 900) {
        this.setState({
          properties: [],
          message: 'Something went wrong. Please try again.',
          location: placeName,
        });
      }

      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { location, properties, loading, message } = this.state;

    return (
      <>
        <Header title="Listings" textAlign="center" height="md" />
        <ListingSearch />
        <PropertiesSection>
          <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between">
              <Title>
                Property for sale in <b>{location}</b>
              </Title>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: '30vh' }}
            >
              {loading && <ClipLoader />}

              {message && <ErrorMessage>{message}</ErrorMessage>}

              {properties.length > 0 && (
                <PropertyCardList properties={properties} limit={9} />
              )}
            </Box>
          </Container>
        </PropertiesSection>
        <Footer />
      </>
    );
  }
}

export default withRouter(Listings);

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.size['2xl']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  text-align: center;
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-bottom: ${(props) => props.theme.spacing['3xl']};
`;

const PropertiesSection = styled.section`
  margin-top: -15rem;
  padding: 15rem 0;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.typography.size.base};
  color: ${(props) => props.theme.palette.neutral['500']};
`;
