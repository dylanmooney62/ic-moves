import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/images/family.jpeg';
import CustomButton from './shared/CustomButton';

const LearnMore = () => (
  <StyledSection>
    <ImgContainer>
      <Img src={backgroundImage} />
    </ImgContainer>
    <TextBox>
      <Title>We're happy to help</Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione soluta
        facere iure praesentium dolorum libero corrupti quia nostrum temporibus
        quidem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
        laudantium totam necessitatibus!
      </Paragraph>
      <CustomButton as="a" href="#">
        Learn More
      </CustomButton>
    </TextBox>
  </StyledSection>
);

export default LearnMore;

const StyledSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.palette.primary['100']};
  height: 33vw;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

const ImgContainer = styled.figure`
  height: 100%;
  width: 45%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TextBox = styled.div`
  padding: ${(props) => props.theme.spacing['2xl']};
  max-width: 90rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.size['5xl']};
  font-weight: ${(props) => props.theme.typography.weight.base};
  color: ${(props) => props.theme.palette.neutral['600']};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.typography.size.lg};
  color: ${(props) => props.theme.palette.neutral['400']};
  margin-bottom: ${(props) => props.theme.spacing['2xl']};
  line-height: 2;
`;
