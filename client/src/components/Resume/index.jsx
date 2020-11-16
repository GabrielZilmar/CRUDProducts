import React from 'react';

import {
  Container,
  Ad,
  Info,
} from './style';

import ProductImage from '../../assets/product.png';
import BusinessImage from '../../assets/business.png';

const Resume = () => (
  <Container>
    <Ad>
      <img src={ProductImage} alt="A Product" />
      <p>This is the description of the product!</p>
      <p>More informations you can see in more words that will be write in this part.</p>
      <p>More informations you can see in more words that will be write in this part.</p>
      <p>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.`}
      </p>
      <br />
      <h1>Click Here to See More</h1>
      <br />
      <button type="button">More Info</button>
    </Ad>
    <Info>
      <img src={BusinessImage} alt="Business Hanshake" />
    </Info>
  </Container>
);

export default Resume;
