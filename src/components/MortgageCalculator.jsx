import React, { Component } from 'react';
import styled from 'styled-components';

import Panel from './shared/Panel';
import CustomInput from './shared/CustomInput';
import Box from './shared/Box';
import CustomButton from './shared/CustomButton';

export class MortgageCalculator extends Component {
  // TODO clean up and add prop types

  state = {
    amount: this.props.defaultAmount,
    interest: 3.92,
    years: 25,
    total: 0,
    payment: 0,
    loading: false,
  };

  componentDidMount() {
    this._calculateMortage();
  }

  _calculateMortage = () => {
    const { amount, interest, years } = this.state;

    const payment = (
      amount *
      (interest / 1200) *
      (1 + 1 / (Math.pow(1 + interest / 1200, years * 12) - 1))
    ).toFixed(2);

    const total = (payment * years * 12).toFixed(2);

    this.setState({
      total,
      payment,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = () => {
    this._calculateMortage();
  };

  render() {
    const { amount, interest, years, payment, total } = this.state;

    const nf = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    });

    return (
      <StyledMortgageCalulator>
        <Box p="lg">
          <Box mb="lg">
            <CustomInput
              label="Amount (£)"
              name="amount"
              id="amount"
              type="number"
              display="block"
              value={amount}
              onChange={this.handleChange}
            />
          </Box>
          <Box mb="lg">
            <CustomInput
              label="Interest Rate (%)"
              name="interest"
              id="interest"
              type="number"
              display="block"
              value={interest}
              onChange={this.handleChange}
            />
          </Box>
          <Box mb="lg">
            <CustomInput
              label="Mortgage Period (Years)"
              name="years"
              id="years"
              type="number"
              display="block"
              value={years}
              onChange={this.handleChange}
            />
          </Box>
          <Box mb="lg">
            <Paragraph>
              Total Cost of Mortgage: <span>{nf.format(total)}</span>
            </Paragraph>
            <Paragraph>
              Monthly Payment: <span>{nf.format(payment)}</span>
            </Paragraph>
          </Box>
          <CustomButton onClick={this.handleSubmit} display="block">
            Calculate Mortgage
          </CustomButton>
        </Box>
      </StyledMortgageCalulator>
    );
  }
}

export default MortgageCalculator;

const StyledMortgageCalulator = styled(Panel)`
  width: 100%;
  max-width: 60rem;

  @media only screen and (max-width: 1240px) {
    margin: 0 auto;
  }
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.typography.size.base};
  color: ${(props) => props.theme.palette.neutral['400']};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }

  span {
    color: ${(props) => props.theme.palette.neutral['500']};
    font-weight: ${(props) => props.theme.typography.weight.bold};
    font-size: ${(props) => props.theme.typography.size.xl};
    margin-left: ${(props) => props.theme.spacing.sm};
  }
`;
