import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../shared/Container';
import CustomInput from '../shared/CustomInput';
import CustomSelect from '../shared/CustomSelect';
import TabButton from './TabButton';
import SearchButton from './SearchButton';
import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';

import {
  MIN_PRICE_OPTIONS,
  MAX_PRICE_OPTIONS,
  BEDROOM_OPTIONS,
} from './options';

export class ListingSearch extends Component {
  state = {
    method: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
    minBedroom: 0,
    advancedSearch: false,
  };

  toggleAdvancedSearch = () => {
    this.setState((prevState) => ({
      advancedSearch: !prevState.advancedSearch,
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
    const { location, method } = this.state;

    return (
      <StyledListingSearch as="form" onSubmit={this.handleSubmit}>
        <div>
          <TabButton
            active={method === 'buy'}
            name="method"
            value="buy"
            onClick={this.handleChange}
          >
            Buy
          </TabButton>
          <TabButton
            active={method === 'rent'}
            name="method"
            value="rent"
            onClick={this.handleChange}
          >
            Rent
          </TabButton>
        </div>
        <MainForm>
          <FormGroup>
            <StyledCustomInput
              label="Location"
              name="location"
              id="location"
              value={location}
              placeholder="e.g Glasgow, GLS or 'Bellgrove'"
              type="text"
              onChange={this.handleChange}
            />
            <Divider />
            <StyledCustomSelect
              label="Min Price"
              id="minPrice"
              name="minPrice"
              onChange={this.handleChange}
              options={MIN_PRICE_OPTIONS}
            />
            <Divider />
            <StyledCustomSelect
              label="Max Price"
              id="maxPrice"
              name="maxPrice"
              onChange={this.handleChange}
              options={MAX_PRICE_OPTIONS}
            />
            <Divider />
            <StyledCustomSelect
              label="Bedrooms"
              id="minBedroom"
              name="minBedroom"
              onChange={this.handleChange}
              options={BEDROOM_OPTIONS}
            />
            <AdvancedSearchButton onClick={this.toggleAdvancedSearch}>
              Advanced Search
              <StyledChevron />
            </AdvancedSearchButton>
          </FormGroup>
          <SearchButton />
        </MainForm>
      </StyledListingSearch>
    );
  }
}

export default ListingSearch;

const StyledListingSearch = styled(Container)`
  transform: translateY(-10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.shadow['1']};

  @media only screen and (max-width: 1240px) {
    max-width: 70rem;
  }
`;

const MainForm = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.radius.md};

  @media only screen and (max-width: 1240px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-top: ${(props) => props.theme.spacing['xl']};
  padding-bottom: 3.8rem;
  padding-left: ${(props) => props.theme.spacing['xl']};
  padding-right: ${(props) => props.theme.spacing['xl']};
  flex-wrap: wrap;
  position: relative;

  @media only screen and (max-width: 1240px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledCustomInput = styled(CustomInput)`
  @media only screen and (max-width: 1240px) {
    width: 100%;
  }
`;

const StyledCustomSelect = styled(CustomSelect)`
  @media only screen and (max-width: 1240px) {
    width: 100%;
  }
`;

const AdvancedSearchButton = styled.button`
  all: unset;
  position: absolute;
  bottom: ${(props) => props.theme.spacing.xs};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.size.xs};
  color: ${(props) => props.theme.palette.neutral['300']};
`;

const Divider = styled.div`
  display: none;

  @media only screen and (max-width: 1240px) {
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }
`;

const StyledChevron = styled(Chevron)`
  fill: ${(props) => props.theme.palette.primary['500']};
  margin-left: ${(props) => props.theme.spacing['2xs']};
`;
