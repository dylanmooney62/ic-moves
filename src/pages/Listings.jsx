import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'query-string';
import camelcaseKeys from 'camelcase-keys';

import Box from '../components/shared/Box';

import Header from '../components/Header/Header';
import ListingSearch from '../components/ListingSearch/ListingSearch';
import Container from '../components/shared/Container';

export class Listings extends Component {
  state = {};

  componentDidMount() {
    this._updateLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this._updateLocation();
    }
  }

  _updateLocation() {
    const { location } = this.props;

    if (location) {
      const queryParams = qs.parse(location.search);

      this.setState({ location: queryParams.location });
    }
  }

  render() {
    const { location } = this.state;

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
`;
