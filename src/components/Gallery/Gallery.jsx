import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import GalleryButton from './GalleryButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import placeholderImg1 from '../../assets/images/placeholder-1.jpeg';
import placeholderImg2 from '../../assets/images/placeholder-2.jpeg';

const Gallery = ({ imgUrl }) => {
  const SETTINGS = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
  };

  const slider = React.createRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <StyledGallery>
      <GalleryButton direction="prev" onClick={previous} />
      <StyledSlider {...SETTINGS} ref={slider}>
        <Image src={imgUrl} alt="Property Image" />
        <Image src={placeholderImg1} alt="placeholder image" />
        <Image src={placeholderImg2} alt="placeholder image" />
      </StyledSlider>
      <GalleryButton direction="next" onClick={next} />
    </StyledGallery>
  );
};

Gallery.propTypes = {
  imgUrl: PropTypes.string,
};

export default Gallery;

const StyledGallery = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  height: 40rem;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 60rem;
  height: 40rem;
`;

const Image = styled.img`
  position: relative;
  object-position: center;
  object-fit: cover;
  display: block;
  width: 100%;
  max-width: 60rem;
  height: 40rem;
`;
