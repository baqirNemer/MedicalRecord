import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

import h1Image from './images/h1.jpg';
import h2Image from './images/h2.jpg';

const captionStyle = {
  position: 'absolute',
  left: '15%',
  textAlign: 'left',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '50%',
};

function Carousel() {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={h1Image}
          alt="First slide"
        />
        <div style={captionStyle}>
          <h2>Connect with your profile anywhere</h2>
          <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
        </div>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={h2Image}
          alt="Second slide"
        />
        <div style={captionStyle}>
          <h2>Stay updated to your health record</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
}

export default Carousel;
