import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../shared/Container';
import CustomInput from '../shared/CustomInput';
import CustomSelect from '../shared/CustomSelect';
import TabButton from './TabButton';
import SearchButton from './SearchButton';
import {
  MIN_PRICE_OPTIONS,
  MAX_PRICE_OPTIONS,
  BEDROOM_OPTIONS,
} from './options';

export class ListingSearch extends Component {
  state = {
    buy: true,
    location: '',
    minPrice: 0,
    maxPrice: 0,
    minBedroom: 0,
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { buy, location } = this.state;

    return (
      <StyledListingSearch as="form" onSubmit={this.handleSubmit}>
        <div>
          <TabButton active={buy} onClick={() => this.setState({ buy: true })}>
            Buy
          </TabButton>
          <TabButton
            active={!buy}
            onClick={() => this.setState({ buy: false })}
          >
            Rent
          </TabButton>
        </div>
        <MainForm>
          <FormGroup>
            <CustomInput
              label="Location"
              name="location"
              id="location"
              value={location}
              placeholder="e.g Glasgow, GLS or 'Bellgrove'"
              type="text"
              onChange={this.handleChange}
            />
            <CustomSelect
              label="Min Price"
              id="minPrice"
              name="minPrice"
              onChange={this.handleChange}
              options={MIN_PRICE_OPTIONS}
            />
            <CustomSelect
              label="Max Price"
              id="maxPrice"
              name="maxPrice"
              onChange={this.handleChange}
              options={MAX_PRICE_OPTIONS}
            />
            <CustomSelect
              label="Bedrooms"
              id="minBedroom"
              name="minBedroom"
              onChange={this.handleChange}
              options={BEDROOM_OPTIONS}
            />
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
`;

const MainForm = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.radius.md};
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-top: ${(props) => props.theme.spacing['xl']};
  padding-bottom: ${(props) => props.theme.spacing['xl']};
  padding-left: ${(props) => props.theme.spacing['xl']};
  padding-right: ${(props) => props.theme.spacing['xl']};
`;
