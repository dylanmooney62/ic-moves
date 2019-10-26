import React from 'react';
import styled from 'styled-components';
import Container from './shared/Container';
import { withRouter } from 'react-router';

import { ReactComponent as Chevron } from '../assets/icons/chevron-left.svg';

const BackBanner = ({ history }) => {
  const handleClick = () => {
    history.goBack();
  };

  return (
    <StyledBackBanner>
      <Container maxWidth="lg">
        <BackButton onClick={handleClick}>
          <StyledChevron />
          Back to Search Results
        </BackButton>
      </Container>
    </StyledBackBanner>
  );
};

export default withRouter(BackBanner);

const StyledBackBanner = styled.div`
  background-color: ${(props) => props.theme.palette.primary['100']};
  padding-top: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.md};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.typography.size.xs};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing['2xs']};
  color: ${(props) => props.theme.palette.neutral['400']};

  :focus {
    outline: 2px solid ${(props) => props.theme.palette.primary['400']};
  }
`;

const StyledChevron = styled(Chevron)`
  margin-right: ${(props) => props.theme.spacing.sm};
`;
