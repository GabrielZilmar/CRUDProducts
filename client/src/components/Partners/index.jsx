import React from 'react';
import Slider from 'react-slick';

import { Container, Image } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AmdLogo from '../../assets/partners/Amd-logo.png';
import IntelLogo from '../../assets/partners/Intel-logo.png';
import MicrosoftLogo from '../../assets/partners/Microsoft-logo.png';
import NvidiaLogo from '../../assets/partners/Nvidia-logo.png';
import SonyLogo from '../../assets/partners/Sony-logo.png';

const photos = [
  {
    name: 'Amd-Logo',
    url: AmdLogo,
  },
  {
    name: 'Intel-Logo',
    url: IntelLogo,
  },
  {
    name: 'Microsoft-Logo',
    url: MicrosoftLogo,
  },
  {
    name: 'Nvidia-Logo',
    url: NvidiaLogo,
  },
  {
    name: 'Sony-Logo',
    url: SonyLogo,
  },
];

const Parteners = () => {
  const settings = {
    dots: true,
    fade: true,
    infinte: true,
    slidesToShow: 1,
    pauseOnFocus: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <Container>
          <Image src={photo.url} alt={photo.name} />
        </Container>
      ))}
    </Slider>
  );
};

export default Parteners;
