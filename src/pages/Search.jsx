import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import propertySearch from '../api/propertySearch';

import ClipLoader from 'react-spinners/ClipLoader';

import Box from '../components/shared/Box';
import Header from '../components/Header/Header';
import ListingSearch from '../components/ListingSearch/ListingSearch';
import Container from '../components/shared/Container';
import PropertyCardList from '../components/PropertyCardList';

export class Listings extends Component {
  state = {
    location: '',
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
    });

    const { location } = this.props;
    const results = await propertySearch.get(location.search);

    if (results.status === 200) {
      this.setState({
        properties: results.data.response.listings,
        loading: false,
      });
    } else {
      this.setState({
        message: 'Please Try again',
        loading: false,
      });
    }
  }

  render() {
    const { location, properties, loading } = this.state;

    return (
      <>
        <Header title="Listings" textAlign="center" height="md" />
        <ListingSearch />
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between">
            <Title>
              Property for sale in <b>{location}</b>
            </Title>
          </Box>
          <Box display="flex" justifyContent="center">
            {loading ? (
              <div style={{ marginTop: '100px', marginBottom: '200px' }}>
                <ClipLoader />
              </div>
            ) : (
              <PropertyCardList properties={properties} limit={9} />
            )}
          </Box>
        </Container>
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
