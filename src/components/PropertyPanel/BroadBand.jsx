import React, { Component } from 'react';
import styled from 'styled-components';

import { ReactComponent as WifiIcon } from '../../assets/icons/wifi.svg';

import Box from '../shared/Box';

export class BroadBand extends Component {
  render() {
    return (
      <Box display="flex" alignItems="center">
        <StyledWifiIcon />
        <Box>
          <Paragraph>
            You could get <span>Ultrafast BroadBand</span>
          </Paragraph>
          <Paragraph>
            Up to <span>200Mbsp</span>
          </Paragraph>
        </Box>
      </Box>
    );
  }
}

export default BroadBand;

const StyledWifiIcon = styled(WifiIcon)`
  width: 100px;
  height: 100px;
  transform: translateY(-7px);
  margin-right: ${(props) => props.theme.spacing.md};
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.typography.size.base};
  color: ${(props) => props.theme.palette.neutral['500']};
  margin-bottom: ${(props) => props.theme.spacing.xs};

  span {
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`;
