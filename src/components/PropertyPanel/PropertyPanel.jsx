import React, { Component } from 'react';
import styled from 'styled-components';

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
        <Box>
          <LargeTab
            active={show === 'detail'}
            name="show"
            value="detail"
            onClick={this.handleClick}
          >
            Property Details
          </LargeTab>
          <LargeTab
            active={show === 'map'}
            name="show"
            value="map"
            onClick={this.handleClick}
          >
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
  width: 50%;
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;
