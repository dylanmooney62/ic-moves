import React, { Component } from 'react';
import styled from 'styled-components';

import BasicForm from './BasicForm';
import AdvancedForm from './AdvancedForm';
import CustomButton from '../shared/CustomButton';
import Tab from '../shared/Tab';
import Box from '../shared/Box';

import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';

export class ListingSearch extends Component {
  state = {
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
    minBedroom: 0,
    maxBedroom: 0,
    minBathroom: 0,
    maxBathroom: 0,
    keywords: '',
    showAdvancedForm: false,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      showAdvancedForm: !prevState.showAdvancedForm,
    }));
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { type, location, keywords, showAdvancedForm } = this.state;

    return (
      <StyledListingSearch as="form" onSubmit={this.handleSubmit}>
        <Box>
          <Tab
            active={type === 'buy'}
            name="type"
            value="buy"
            onClick={this.handleChange}
          >
            Buy
          </Tab>
          <Tab
            active={type === 'rent'}
            name="type"
            value="rent"
            onClick={this.handleChange}
          >
            Rent
          </Tab>
        </Box>
        <FormContainer
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Box shadow={1} flexGrow={1}>
            <BasicForm
              location={location}
              onChange={this.handleChange}
              onToggle={this.handleToggle}
            />
            <AdvancedForm
              active={showAdvancedForm}
              keywords={keywords}
              onChange={this.handleChange}
            />
          </Box>
          <SearchButton onClick={this.handleSubmit}>
            Search <StyledSearch />
          </SearchButton>
        </FormContainer>
      </StyledListingSearch>
    );
  }
}

export default ListingSearch;

const StyledListingSearch = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  transform: translateY(-10.7rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radius.md};

  @media only screen and (max-width: 1240px) {
    max-width: 70rem;
  }
`;

const FormContainer = styled(Box)`
  @media only screen and (max-width: 1240px) {
    flex-direction: column;
  }
`;

const SearchButton = styled(CustomButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.typography.size.lg};
  width: 16.5rem;
  max-height: 12.8rem;
  border-top-right-radius: ${(props) => props.theme.radius.md};
  border-bottom-right-radius: ${(props) => props.theme.radius.md};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: ${(props) => props.theme.shadow['1']};

  @media only screen and (max-width: 1240px) {
    width: 100%;
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xl};
  }
`;

const StyledSearch = styled(Search)`
  margin-left: ${(props) => props.theme.spacing.sm};
`;
