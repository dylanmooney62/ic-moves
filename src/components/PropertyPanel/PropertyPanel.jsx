import React, { Component } from 'react';
import styled from 'styled-components';

import { ReactComponent as HouseIcon } from '../../assets/icons/house-outline.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location-icon-large.svg';

import Panel from '../shared/Panel';
import Tab from '../shared/Tab';
import Box from '../shared/Box';
import Map from '../Map';
import Features from './Features';
import BroadBand from './BroadBand';

export class PropertyPanel extends Component {
  state = {
    show: 'details',
  };

  handleClick = (e) => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  render() {
    const { show } = this.state;
    const { longitude, latitude, keywords } = this.props.property;

    // removes white space that ends up on some features
    const features = keywords.split(',').map((feature) => feature.trim());

    return (
      <StyledPropertyPanel>
        <Box display="flex" mb="sm">
          <LargeTab
            active={show === 'details'}
            name="show"
            value="details"
            onClick={this.handleClick}
          >
            <StyledHouseIcon />
            Property Details
          </LargeTab>
          <LargeTab
            active={show === 'map'}
            name="show"
            value="map"
            onClick={this.handleClick}
          >
            <StyledLocationIcon />
            Map & Nearby
          </LargeTab>
        </Box>
        <Box p="lg">
          {show === 'details' ? (
            <>
              <Box mb="2xl">
                <Title>Features</Title>
                <Features features={features} />
              </Box>
              <Box mb="md">
                <Title>Broadband</Title>
                <BroadBand lat={latitude} lng={longitude} />
              </Box>
            </>
          ) : (
            <Map lat={latitude} lng={longitude} />
          )}
        </Box>
      </StyledPropertyPanel>
    );
  }
}

export default PropertyPanel;

const StyledPropertyPanel = styled(Panel)`
  width: 100%;
  max-width: 60rem;

  @media only screen and (max-width: 1240px) {
    margin: 0 auto;
  }
`;

const LargeTab = styled(Tab)`
  flex: 1;
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHouseIcon = styled(HouseIcon)`
  fill: ${(props) => props.theme.palette.primary['500']};
  margin-right: ${(props) => props.theme.spacing.sm};
`;

const StyledLocationIcon = styled(LocationIcon)`
  fill: ${(props) => props.theme.palette.primary['500']};
  margin-right: ${(props) => props.theme.spacing.sm};
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.size['2xl']};
  color: ${(props) => props.theme.palette.neutral['500']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;
