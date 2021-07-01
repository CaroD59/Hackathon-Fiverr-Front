import styled from 'styled-components';

const SCarrousel = styled.div`
  width: 90vh;
  height: auto;

  /*   width: 80vw;
  padding-top: 20px;
  margin: auto; */

  .each-slideshow-indicator::before {
    background: ${({ theme }) => theme.fontColor || 'yellowgreen'};
  }

  img {
    width: 90vh;
  }
`;
export default SCarrousel;
