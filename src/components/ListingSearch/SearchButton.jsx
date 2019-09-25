import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import CustomButton from '../shared/CustomButton';

import React from 'react';

const SearchButton = ({ onClick }) => (
  <StyledSearchButton onClick={onClick}>
    Search
    <StyledSearchIcon />
  </StyledSearchButton>
);

export default SearchButton;

const StyledSearchButton = styled(CustomButton)`
  align-self: stretch;
  width: 16.5rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: ${(props) => props.theme.typography.size.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  margin-left: ${(props) => props.theme.spacing.sm};
`;
