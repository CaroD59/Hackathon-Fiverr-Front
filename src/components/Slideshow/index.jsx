import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SCarrousel from './style';

const properties = {
  autoplay: true,
  duration: 3000,
  transitionDuration: 5,
  infinite: true,
  indicators: false,
  arrows: false,
};

export default function Carrousel() {
  return (
    <SCarrousel className="container">
      <Slide {...properties}>
        <div className="slide">
          <img src="/images/keke2.jpg" alt="img1" />
        </div>
        <div className="slide">
          <img src="/images/keke3.jpg" alt="img1" />
        </div>
        <div className="slide">
          <img src="/images/keke5.jpg" alt="img1" />
        </div>
        <div className="slide">
          <img src="/images/keke1.jpg" alt="img1" />
        </div>
        <div className="slide">
          <div>
            <img src="/images/keke4.jpg" alt="img1" />
          </div>
        </div>
      </Slide>
    </SCarrousel>
  );
}
