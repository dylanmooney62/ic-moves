import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';

const Features = ({ features }) => {
  return (
    <FeatureList>
      {features.map((feature, idx) => (
        <Feature key={idx}>
          <StyledCheckIcon />
          {feature}
        </Feature>
      ))}
    </FeatureList>
  );
};

export default Features;

const FeatureList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${(props) => props.theme.spacing.lg};
`;

const Feature = styled.li`
  font-size: ${(props) => props.theme.typography.size.base};
  color: ${(props) => props.theme.palette.neutral['400']};
  display: flex;
  align-items: center;
`;

const StyledCheckIcon = styled(CheckIcon)`
  fill: ${(props) => props.theme.palette.primary['500']};
  margin-right: ${(props) => props.theme.spacing.md};
`;
