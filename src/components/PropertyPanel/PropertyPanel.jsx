import React, { Component } from 'react';
import styled from 'styled-components';

import { ReactComponent as HouseIcon } from '../../assets/icons/house-outline.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location-icon-large.svg';

import Panel from '../shared/Panel';
import Tab from '../shared/Tab';
import Box from '../shared/Box';

export class PropertyPanel extends Component {
  state = {
    show: 'detail',
  };

  handleClick = (e) => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  render() {
    const { show } = this.state;

    return (
      <StyledPropertyPanel>
        <Box display="flex">
          <LargeTab
            active={show === 'detail'}
            name="show"
            value="detail"
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
        <Box p="md"></Box>
      </StyledPropertyPanel>
    );
  }
}

export default PropertyPanel;

const StyledPropertyPanel = styled(Panel)`
  width: 100%;
  max-width: 60rem;
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
