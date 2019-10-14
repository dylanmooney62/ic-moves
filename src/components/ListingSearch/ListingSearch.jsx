import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import { camelToUnderscore } from '../../utils/utils';
import qs from 'query-string';
import camelcaseKeys from 'camelcase-keys';

import BasicForm from './BasicForm';
import AdvancedForm from './AdvancedForm';
import CustomButton from '../shared/CustomButton';
import Tab from '../shared/Tab';
import Box from '../shared/Box';

import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';

export class ListingSearch extends Component {
  state = {
    formData: {
      type: 'buy',
      location: '',
      minPrice: 0,
      maxPrice: 0,
      minBedroom: 0,
      maxBedroom: 0,
      minBathroom: 0,
      maxBathroom: 0,
      keywords: '',
    },
    errors: {
      location: '',
    },
    showAdvancedForm: false,
  };

  componentDidMount() {
    const { location } = this.props;

    // fills form values with query params
    if (location.search) {
      const queryFormData = camelcaseKeys(qs.parse(location.search));
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          ...queryFormData,
        },
      }));
    }
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      showAdvancedForm: !prevState.showAdvancedForm,
    }));
  };

  handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // ensures data from selects is converted to integers
    if (!isNaN(parseInt(value, 10))) {
      value = parseInt(value, 10);
    }

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const { history } = this.props;

    if (formData.location) {
      // returns a string of search params for inputs the user has filled in
      const searchParams = Object.keys(formData)
        .filter((key) => formData[key])
        .map((key) => {
          return `${camelToUnderscore(key)}=${formData[key]}`;
        })
        .join('&');

      history.push({
        pathname: '/listings',
        search: `?${searchParams}`,
      });
    } else {
      this._toggleError('location', 'Please enter a location');
    }
  };

  _toggleError = (error, msg) => {
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [error]: msg,
      },
    }));

    setTimeout(() => {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [error]: '',
        },
      }));
    }, 3000);
  };

  render() {
    const { formData, showAdvancedForm, errors } = this.state;

    return (
      <StyledListingSearch as="form" onSubmit={this.handleSubmit}>
        <Box>
          <Tab
            type="button"
            active={formData.type === 'buy'}
            name="type"
            value="buy"
            onClick={this.handleChange}
          >
            Buy
          </Tab>
          <Tab
            type="button"
            active={formData.type === 'rent'}
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
              formData={formData}
              onChange={this.handleChange}
              onToggle={this.handleToggle}
              errors={errors}
            />
            <AdvancedForm
              formData={formData}
              active={showAdvancedForm}
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

export default withRouter(ListingSearch);

const StyledListingSearch = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  transform: translateY(-10.7rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1240px) {
    max-width: 70rem;
    width: 90%;
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
  padding-left: ${(props) => props.theme.spacing.xl};
  padding-right: ${(props) => props.theme.spacing.xl};

  @media only screen and (max-width: 1240px) {
    width: 100%;
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xl};
  }
`;

const StyledSearch = styled(Search)`
  margin-left: ${(props) => props.theme.spacing.sm};
`;
